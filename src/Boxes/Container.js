import React, { useState, useEffect, useContext, createContext } from "react";

import { default as BoxContext } from "./Context";
import names from "./names";

function Container({ children }) {
  const resetClicked = () =>
    Object.keys(names).reduce((map, name) => {
      map[name] = false;
      return map;
    }, {});

  const [clickedBoxes, setClickedBoxes] = useState(resetClicked());

  // Turn only one box on
  const setClickedBox = boxName => {
    const previous = clickedBoxes[boxName];
    setClickedBoxes({ ...resetClicked(), [boxName]: !previous });
  };

  const contextValue = { clickedBoxes, setClickedBox };

  return (
    <BoxContext.Provider value={contextValue}>
      <article className="container">{children}</article>
    </BoxContext.Provider>
  );
}

export default Container;

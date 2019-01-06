import React, { useState, useEffect, useContext, createContext } from "react";

import { default as BoxContext } from "./Context";
import names from "./names";
// import { maxMediaWidth } from "../constants";

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

  // const resetClickedBoxes = () => setClickedBoxes(resetClicked());

  // useEffect(() => {
  //   // Unclick all boxes in Mobile mode
  //   // https://www.w3schools.com/howto/howto_js_media_queries.asp
  //   const matches = window.matchMedia(`(max-width: ${maxMediaWidth})`);
  //   if (matches) resetClickedBoxes();
  // }, []);

  const contextValue = { clickedBoxes, setClickedBox };

  return (
    <BoxContext.Provider value={contextValue}>
      <article className="box-container">{children}</article>
    </BoxContext.Provider>
  );
}

export default Container;

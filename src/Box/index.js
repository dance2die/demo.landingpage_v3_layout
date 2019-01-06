import React, { useState, useEffect, useContext, createContext } from "react";
import classNames from "classnames";

const BoxContext = createContext();

const names = {
  WritingsBox: "WritingsBox",
  CreationsBox: "CreationsBox",
  SocialBox: "SocialBox",
  MiscBox: "MiscBox"
};

function BoxContainer({ children }) {
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
      <article className="container">
        <WritingsBox />
        <CreationsBox />
        <SocialBox />
        <MiscBox />
      </article>
    </BoxContext.Provider>
  );
}

function Box({ name, className, onClick, ...rest }) {
  const { clickedBox } = useContext(BoxContext);

  useEffect(
    () => {
      // Unclick other boxes
      if (clickedBox !== name) {
        classNames(className, { clicked: false });
      }
    },
    [clickedBox]
  );

  return (
    <div className={classNames("box", className)} onClick={onClick} {...rest} />
  );
}

function Title({ title }) {
  return <h1 className="title">{title}</h1>;
}

function Body({ ...rest }) {
  return <section className="body" {...rest} />;
}

function getBoxClass(boxName) {
  const { clickedBoxes } = useContext(BoxContext);

  return clickedBoxes[boxName]
    ? classNames(boxName, "clicked", "shadow")
    : classNames(boxName);
}

// Personal blog, dev.to, medium ,etc...
function WritingsBox() {
  const name = names.WritingsBox;
  const { clickedBoxes, setClickedBox } = useContext(BoxContext);

  return (
    <Box
      name={name}
      className={getBoxClass(name)}
      onClick={() => setClickedBox(name)}
    >
      <Title title="Writings" />
      {clickedBoxes[name] && <Body>WritingsBox Body~~~</Body>}
    </Box>
  );
}

// GitHub, Gitlab, CodeSandbox, etc...
function CreationsBox() {
  const name = names.CreationsBox;
  const { clickedBoxes, setClickedBox } = useContext(BoxContext);

  return (
    <Box
      name={name}
      className={getBoxClass(name)}
      onClick={() => setClickedBox(name)}
    >
      <Title title="Creations" />
      {clickedBoxes[name] && <Body>Creations Body~~~</Body>}
    </Box>
  );
}

// Social networking sites like Twitter, Instangram, etc...
function SocialBox() {
  const name = names.SocialBox;
  const { clickedBoxes, setClickedBox } = useContext(BoxContext);

  return (
    <Box
      name={name}
      className={getBoxClass(name)}
      onClick={() => setClickedBox(name)}
    >
      <Title title="Social Networking" />
      {clickedBoxes[name] && <Body>Social Networking Body~~~</Body>}
    </Box>
  );
}

// Social networking sites like Twitter, Instangram, etc...
function MiscBox() {
  const name = names.MiscBox;
  const { clickedBoxes, setClickedBox } = useContext(BoxContext);

  return (
    <Box
      name={name}
      className={getBoxClass(name)}
      onClick={() => setClickedBox(name)}
    >
      <Title title="Miscellaneous" />
      {clickedBoxes[name] && <Body>Miscellaneous Body~~~</Body>}
    </Box>
  );
}

// GitHub, Gitlab, CodeSandbox, etc...
export { BoxContainer, WritingsBox, SocialBox, CreationsBox, MiscBox, names };

import React, { useState, useEffect, useContext, createContext } from "react";
import classNames from "classnames";

import { useClassNameToggle } from "../hooks";

const BoxContext = createContext();

function BoxContainer({ children }) {
  const [clickedBox, setClickedBox] = useState("");
  const value = { clickedBox, setClickedBox };

  return (
    <BoxContext.Provider value={value}>
      <article className="container">{children}</article>
    </BoxContext.Provider>
  );
}

function Box({ name, className, onClick, ...rest }) {
  const { clickedBox, setClickedBox } = useContext(BoxContext);

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

// Personal blog, dev.to, medium ,etc...
function WritingsBox() {
  const defaultToggleClassName = "clicked";
  const { className, toggle } = useClassNameToggle(defaultToggleClassName);

  return (
    <Box
      name="WritingsBox"
      className={classNames(["blog", className])}
      onClick={toggle}
    >
      <Title title="Writings" />
      {className && <Body>Box Body~~~</Body>}
    </Box>
  );
}

// GitHub, Gitlab, CodeSandbox, etc...
function CreationsBox() {
  const defaultToggleClassName = "clicked";
  const { className, toggle } = useClassNameToggle(defaultToggleClassName);

  return (
    <Box
      name="CreationsBox"
      className={classNames(["github", className])}
      onClick={toggle}
    >
      <Title title="Creations" />
      {className && <Body>GitHub Body~~~</Body>}
    </Box>
  );
}

// Social networking sites like Twitter, Instangram, etc...
function SocialBox() {
  const defaultToggleClassName = "clicked";
  const { className, toggle } = useClassNameToggle(defaultToggleClassName);

  return (
    <Box
      name="SocialBox"
      className={classNames(["social", className])}
      onClick={toggle}
    >
      <Title title="Social Networking" />
      {className && <Body>GitHub Body~~~</Body>}
    </Box>
  );
}

// Social networking sites like Twitter, Instangram, etc...
function MiscBox() {
  const defaultToggleClassName = "clicked";
  const { className, toggle } = useClassNameToggle(defaultToggleClassName);

  return (
    <Box
      name="MiscBox"
      className={classNames(["misc", className])}
      onClick={toggle}
    >
      <Title title="Miscellaneous" />
      {className && <Body>Miscellaneous Body~~~</Body>}
    </Box>
  );
}

// GitHub, Gitlab, CodeSandbox, etc...
export { BoxContainer, WritingsBox, SocialBox, CreationsBox, MiscBox };

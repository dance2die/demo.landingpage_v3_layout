import React from "react";
import classNames from "classnames";

import { useClassNameToggle } from "../hooks";

function Box({ className, onClick, children }) {
  return (
    <div className={classNames("box", className)} onClick={onClick}>
      {children}
    </div>
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
    <Box className={classNames(["blog", className])} onClick={toggle}>
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
    <Box className={classNames(["github", className])} onClick={toggle}>
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
    <Box className={classNames(["social", className])} onClick={toggle}>
      <Title title="Social Networking" />
      {className && <Body>GitHub Body~~~</Body>}
    </Box>
  );
}

// GitHub, Gitlab, CodeSandbox, etc...
export { WritingsBox, SocialBox, CreationsBox };

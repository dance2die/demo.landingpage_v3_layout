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

function BlogBox() {
  const defaultToggleClassName = "clicked";
  const { className, toggle } = useClassNameToggle(defaultToggleClassName);

  return (
    <Box className={classNames(["blog", className])} onClick={toggle}>
      <Title title="Writings" />
      {className && <Body>Box Body~~~</Body>}
    </Box>
  );
}

function GithubBox() {
  const defaultToggleClassName = "clicked";
  const { className, toggle } = useClassNameToggle(defaultToggleClassName);

  return (
    <Box className={classNames(["github", className])} onClick={toggle}>
      <Title title="GitHub" />
      {className && <Body>GitHub Body~~~</Body>}
    </Box>
  );
}

export { BlogBox, GithubBox };

import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import { useClassNameToggle } from "./hooks";

import "./styles.scss";

function Box({ className, onClick, children }) {
  return (
    <div className={classNames("box", className)} onClick={onClick}>
      {children}
    </div>
  );
}

function BoxTitle({ title }) {
  return <h1 className="title">{title}</h1>;
}

function BoxBody({ ...rest }) {
  return <section className="body" {...rest} />;
}

function BlogBox() {
  const defaultToggleClassName = "blog-box-clicked";
  const { className, toggle } = useClassNameToggle(defaultToggleClassName);

  return (
    <Box className={classNames(["blog-box", className])} onClick={toggle}>
      <BoxTitle title="Writings" />
      {className && <BoxBody>Box Body~~~</BoxBody>}
    </Box>
  );
}

function App() {
  return (
    <section className="layout">
      <article className="container">
        <BlogBox />
        {/* <SocialBox />
        <GithubBox />
        <SourcererBox /> */}
      </article>
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

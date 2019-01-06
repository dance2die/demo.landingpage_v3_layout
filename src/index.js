import React, { useState } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import "./styles.scss";

const log = console.log;

function useClassNameToggle(toggleClassName) {
  const [className, setBlogBoxClicked] = useState("");

  function toggle() {
    if (className) setBlogBoxClicked("");
    else setBlogBoxClicked(classNames(toggleClassName, "shadow"));
  }

  return { className, toggle };
}

function BlogBox() {
  const defaultBlogBoxClicked = "blog-box-clicked";
  const { className, toggle } = useClassNameToggle(defaultBlogBoxClicked);

  return (
    <div
      className={classNames(["box", "blog-box", className])}
      onClick={toggle}
    />
  );
}

function App() {
  // const [blogClass, setBlogClass] = useState("");
  // const [socialClass, setSocialClass] = useState("");
  // const [githubClass, setGithubClass] = useState("");
  // const [sourcererClass, setSourcererClass] = useState("");

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

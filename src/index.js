import React from "react";
import ReactDOM from "react-dom";

import { BlogBox, GithubBox } from "./Box";

import "./styles.scss";

function App() {
  return (
    <section className="layout">
      <article className="container">
        <BlogBox />
        <GithubBox />
        {/* <SocialBox />
        <GithubBox />
        <SourcererBox /> */}
      </article>
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

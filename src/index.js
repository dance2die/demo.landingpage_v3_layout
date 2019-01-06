import React from "react";
import ReactDOM from "react-dom";

import { WritingsBox, CreationsBox, SocialBox } from "./Box";

import "./styles.scss";

function App() {
  return (
    <section className="layout">
      <article className="container">
        <WritingsBox />
        <CreationsBox />
        <SocialBox />
        {/* <SocialBox />
        <GithubBox />
        <SourcererBox /> */}
      </article>
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

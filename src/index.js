import React from "react";
import ReactDOM from "react-dom";

import {
  BoxContainer,
  WritingsBox,
  CreationsBox,
  SocialBox,
  MiscBox
} from "./Box";

import "./styles.scss";

function App() {
  return (
    <section className="layout">
      <BoxContainer>
        <WritingsBox />
        <CreationsBox />
        <SocialBox />
        <MiscBox />
      </BoxContainer>
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

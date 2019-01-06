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
  // <BoxContainer>
  //   <WritingsBox />
  //   <CreationsBox />
  //   <SocialBox />
  //   <MiscBox />
  // </BoxContainer>
  return (
    <section className="layout">
      <BoxContainer />
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

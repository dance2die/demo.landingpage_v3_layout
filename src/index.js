import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";

import "./styles.scss";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

const goldenRatio = 1.6180339887498948482;

const centerHeight = 300;
const centerWidth = centerHeight * goldenRatio;
const boxHeight = 100;
const boxWidth = boxHeight * goldenRatio;

const Layout = styled.div`
  height: 100vh;
  display: grid;

  // prettier-ignore
  grid:
    ". . .      " 1fr
    ". center . " ${centerHeight}px
    ". . .      " 1fr
    / 1fr ${centerWidth}px 1fr;

  @media (max-width: 512px) {
    // prettier-ignore
    grid: "center"   100vh / 1fr;
  }
`;

const Container = styled.div`
  border: 1px solid blue;
  grid-area: center;

  display: grid;
  // prettier-ignore
  grid:
    "one   .  two " 1fr 
    "three .  four" 1fr 
    / 1fr 1fr 1fr;

  @media (max-width: 512px) {
    // prettier-ignore
    grid: "one"   1fr
          "two"   1fr
          "three" 1fr
          "four"  1fr
         / 1fr;
  }
`;

const Box = styled.div`
  width: ${boxWidth}px;
  height: ${boxHeight}px;
  border-radius: 10px;

  @media (max-width: 512px) {
    width: 100%
    height: 100%;
    border-radius: 0;
  }
`;

const BlogBox = styled(Box)`
  background-color: red;
  grid-area: one;
`;
const SocialBox = styled(Box)`
  background-color: green;
  grid-area: two;
  justify-self: end;
`;
const GitHubBox = styled(Box)`
  background-color: blue;
  grid-area: three;
  align-self: end;
`;
const SourcererBox = styled(Box)`
  background-color: cyan;
  grid-area: four;
  justify-self: end;
  align-self: end;
`;

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Container>
        <BlogBox />
        <SocialBox />
        <GitHubBox />
        <SourcererBox />
      </Container>
    </Layout>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

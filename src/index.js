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

/*
@todo
* box Make boxes unclickable for mobile
  * If already clicked, then unclick before turning into a mobile mode.
* Update titles
  * ✅ Blog -> Writings
  * ✅ Social Networking Sites -> Social
  * ✅ Creations: same
  * ✅ Miscellaneous -> Misc.

* Add details
  * Writings
    * SlightEdgeCoder
    * Dev.to
    * Medium
  * Social
    * Twitter
    * Instagram
    * Youtube
    * Facebook
  * Creations
  * Misc.
    * Twitch
    * Youtube Live
    * Sourcerer.io
*/

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

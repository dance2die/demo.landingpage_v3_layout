import React from "react";
import ReactDOM from "react-dom";

import { BoxContainer, WritingsBox, DevBox, SocialBox, MiscBox } from "./Boxes";

import "./styles.scss";

/*
@todo
* 👷‍♂️ box Make boxes unclickable for mobile
  * If already clicked, then unclick before turning into a mobile mode.
* ✅ Update titles
  * ✅ Blog -> Writings
  * ✅ Social Networking Sites -> Social
  * ✅ Creations: same
  * ✅ Miscellaneous -> Misc.

* ✅ Add details
  * ️✅ Writings
    * ✅ SlightEdgeCoder
    * ✅ Dev.to
    * ✅ Medium
  * ✅ Social
    * ✅ Twitter
    * ✅ Instagram
  * ✅ Dev
    * ✅ GitHub & ✅ Sourcerer.io
    * ✅ StackOverflow
    * ✅ CodeSandBox
  * ✅‍ Misc.
    * ✅Twitch
    * ✅ Youtube Live
*/

function App() {
  return (
    <section className="layout">
      <BoxContainer>
        <WritingsBox />
        <DevBox />
        <SocialBox />
        <MiscBox />
      </BoxContainer>
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

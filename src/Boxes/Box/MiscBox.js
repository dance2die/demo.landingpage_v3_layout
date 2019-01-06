import React from "react";

import Box from "./Box";
import names from "../names";
import { ExternalLink } from "../../util";

// Social networking sites like Twitter, Instangram, etc...
function MiscBox() {
  function Body() {
    return (
      <ul>
        <li>
          <ExternalLink url="https://www.twitch.tv/dance2die/">
            <i className="fab fa-twitch" />
            Twitch
          </ExternalLink>
        </li>
        <li>
          <ExternalLink url="https://www.youtube.com/channel/UCogIW0rQ1uYQiS9-u9fy1Tg">
            <i className="fab fa-youtube" />
            Youtube
          </ExternalLink>
        </li>
      </ul>
    );
  }

  return <Box name={names.MiscBox} title="Misc." body={<Body />} />;
}

export default MiscBox;

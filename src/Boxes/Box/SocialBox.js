import React from "react";

import Box from "./Box";
import names from "../names";
import { ExternalLink } from "../../util";

// Social networking sites like Twitter, Instangram, etc...
function SocialBox() {
  function Body() {
    return (
      <ul>
        <li>
          <ExternalLink url="https://twitter.com/dance2die">
            <i className="fab fa-twitter" />
            Twitter
          </ExternalLink>
        </li>
        <li>
          <ExternalLink url="https://www.instagram.com/dance2die/">
            <i className="fab fa-instagram" />
            Instagram
          </ExternalLink>
        </li>
        <li>
          <ExternalLink url="https://www.reddit.com/user/dance2die">
            <i className="fab fa-reddit" />
            Reddit
          </ExternalLink>
        </li>
      </ul>
    );
  }

  return <Box name={names.SocialBox} title="Social" body={<Body />} />;
}

export default SocialBox;

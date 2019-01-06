import React from "react";

import Box from "./Box";
import names from "../names";
import { ExternalLink } from "../../util";

// Personal blog, dev.to, medium ,etc...
function WritingsBox() {
  function Body() {
    return (
      <ul>
        <li>
          <ExternalLink url="https://www.slightedgecoder.com/">
            <i className="fas fa-blog" />
            Personal Blog
          </ExternalLink>
        </li>
        <li>
          <ExternalLink url="https://dev.to/dance2die">
            {/* https://fontawesome.com/icons/dev?style=brands */}
            <i className="fab fa-dev" />
            dev.to
          </ExternalLink>
        </li>
        <li>
          <ExternalLink url="https://medium.com/@dance2die">
            <i className="fab fa-medium" />
            Medium
          </ExternalLink>
        </li>
      </ul>
    );
  }

  return <Box name={names.WritingsBox} title="Writings" body={<Body />} />;
}

export default WritingsBox;

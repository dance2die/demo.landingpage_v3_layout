import React from "react";

import Box from "./Box";
import names from "../names";
import { ExternalLink } from "../../util";

// GitHub, Gitlab, CodeSandbox, etc...
function DevBox() {
  function Body() {
    return (
      <ul>
        <li>
          <ExternalLink url="https://github.com/dance2die">
            <i className="fab fa-github" />
            GitHub
          </ExternalLink>
          {" & ("}
          <ExternalLink url="https://sourcerer.io/dance2die">Stat</ExternalLink>
          )
        </li>
        <li>
          <ExternalLink url="https://stackoverflow.com/users/4035/">
            {/* https://fontawesome.com/icons/dev?style=brands */}
            <i className="fab fa-stack-overflow" />
            StackOverflow
          </ExternalLink>
        </li>
        <li>
          <ExternalLink url="https://codesandbox.io/u/dance2die">
            <i className="fab fa-codepen" />
            CodeSandBox
          </ExternalLink>
        </li>
      </ul>
    );
  }

  return <Box name={names.DevBox} title="Dev" body={<Body />} />;
}

export default DevBox;

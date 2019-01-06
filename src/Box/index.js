import React, { useState, useEffect, useContext, createContext } from "react";
import classNames from "classnames";

const log = console.log;

const BoxContext = createContext();

const names = {
  WritingsBox: "WritingsBox",
  DevBox: "DevBox",
  SocialBox: "SocialBox",
  MiscBox: "MiscBox"
};

function BoxContainer({ children }) {
  const resetClicked = () =>
    Object.keys(names).reduce((map, name) => {
      map[name] = false;
      return map;
    }, {});

  const [clickedBoxes, setClickedBoxes] = useState(resetClicked());

  // Turn only one box on
  const setClickedBox = boxName => {
    const previous = clickedBoxes[boxName];
    setClickedBoxes({ ...resetClicked(), [boxName]: !previous });
  };

  const contextValue = { clickedBoxes, setClickedBox };

  return (
    <BoxContext.Provider value={contextValue}>
      <article className="container">
        <WritingsBox />
        <DevBox />
        <SocialBox />
        <MiscBox />
      </article>
    </BoxContext.Provider>
  );
}

function Box({ name, className, onClick, ...rest }) {
  const { clickedBox } = useContext(BoxContext);

  useEffect(
    () => {
      // Unclick other boxes
      if (clickedBox !== name) {
        classNames(className, { clicked: false });
      }
    },
    [clickedBox]
  );

  return (
    <div className={classNames("box", className)} onClick={onClick} {...rest} />
  );
}

function Title({ title }) {
  return <h1 className="title">{title}</h1>;
}

function Body({ ...rest }) {
  return <section className="body" {...rest} />;
}

function getBoxClass(boxName) {
  const { clickedBoxes } = useContext(BoxContext);

  return clickedBoxes[boxName]
    ? classNames(boxName, "clicked", "shadow")
    : classNames(boxName);
}

function ClickableBox({ name, title, body }) {
  const { clickedBoxes, setClickedBox } = useContext(BoxContext);
  return (
    <Box
      name={name}
      className={getBoxClass(name)}
      onClick={() => setClickedBox(name)}
    >
      <Title title={title} />
      <Body>{clickedBoxes[name] && <Body>{body}</Body>}</Body>
    </Box>
  );
}

function ExternalLink({ url, ...rest }) {
  // For rel="noreferrer", refer to
  // https://developers.google.com/web/tools/lighthouse/audits/noopener#recommendations
  return <a href={url} target="_blank" rel="noreferrer" {...rest} />;
}

// Personal blog, dev.to, medium ,etc...
function WritingsBox() {
  function Body() {
    return (
      <ul>
        <li>
          <ExternalLink url="https://www.slightedgecoder.com/">
            <i class="fas fa-blog" />
            Personal Blog
          </ExternalLink>
        </li>
        <li>
          <ExternalLink url="https://dev.to/dance2die">
            {/* https://fontawesome.com/icons/dev?style=brands */}
            <i class="fab fa-dev" />
            dev.to
          </ExternalLink>
        </li>
        <li>
          <ExternalLink url="https://medium.com/@dance2die">
            <i class="fab fa-medium" />
            Medium
          </ExternalLink>
        </li>
      </ul>
    );
  }

  return (
    <ClickableBox name={names.WritingsBox} title="Writings" body={<Body />} />
  );
}

// GitHub, Gitlab, CodeSandbox, etc...
function DevBox() {
  function Body() {
    return (
      <ul>
        <li>
          <ExternalLink url="https://github.com/dance2die">
            <i class="fab fa-github" />
            GitHub
          </ExternalLink>
          {" & ("}
          <ExternalLink url="https://sourcerer.io/dance2die">Stat</ExternalLink>
          )
        </li>
        <li>
          <ExternalLink url="https://stackoverflow.com/users/4035/">
            {/* https://fontawesome.com/icons/dev?style=brands */}
            <i class="fab fa-stack-overflow" />
            StackOverflow
          </ExternalLink>
        </li>
        <li>
          <ExternalLink url="https://codesandbox.io/u/dance2die">
            <i class="fab fa-codepen" />
            CodeSandBox
          </ExternalLink>
        </li>
      </ul>
    );
  }

  return <ClickableBox name={names.DevBox} title="Dev" body={<Body />} />;
}

// Social networking sites like Twitter, Instangram, etc...
function SocialBox() {
  function Body() {
    return (
      <ul>
        <li>
          <ExternalLink url="https://twitter.com/dance2die">
            <i class="fab fa-twitter" />
            Twitter
          </ExternalLink>
        </li>
        <li>
          <ExternalLink url="https://www.instagram.com/dance2die/">
            <i class="fab fa-instagram" />
            Instagram
          </ExternalLink>
        </li>
        <li>
          <ExternalLink url="https://www.reddit.com/user/dance2die">
            <i class="fab fa-reddit" />
            Reddit
          </ExternalLink>
        </li>
      </ul>
    );
  }

  return <ClickableBox name={names.SocialBox} title="Social" body={<Body />} />;
}

// Social networking sites like Twitter, Instangram, etc...
function MiscBox() {
  function Body() {
    return (
      <ul>
        <li>
          <ExternalLink url="https://www.twitch.tv/dance2die/">
            <i class="fab fa-twitch" />
            Twitch
          </ExternalLink>
        </li>
        <li>
          <ExternalLink url="https://www.youtube.com/channel/UCogIW0rQ1uYQiS9-u9fy1Tg">
            <i class="fab fa-youtube" />
            Youtube
          </ExternalLink>
        </li>
      </ul>
    );
  }

  return <ClickableBox name={names.MiscBox} title="Misc." body={<Body />} />;
}

// GitHub, Gitlab, CodeSandbox, etc...
export { BoxContainer, WritingsBox, SocialBox, DevBox, MiscBox };

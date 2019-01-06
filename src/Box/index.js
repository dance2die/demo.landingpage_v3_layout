import React, { useState, useEffect, useContext, createContext } from "react";
import classNames from "classnames";

const log = console.log;

const BoxContext = createContext();

const names = {
  WritingsBox: "WritingsBox",
  CreationsBox: "CreationsBox",
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
        <CreationsBox />
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
function CreationsBox() {
  return (
    <ClickableBox
      name={names.CreationsBox}
      title="Creations"
      body={<div>Creations Body~~~</div>}
    />
  );
}

// Social networking sites like Twitter, Instangram, etc...
function SocialBox() {
  return (
    <ClickableBox
      name={names.SocialBox}
      title="Social"
      body={<div>Social Networking Body~~~</div>}
    />
  );
}

// Social networking sites like Twitter, Instangram, etc...
function MiscBox() {
  return (
    <ClickableBox
      name={names.MiscBox}
      title="Misc."
      body={<div>Miscellaneous Body~~~</div>}
    />
  );
}

// GitHub, Gitlab, CodeSandbox, etc...
export { BoxContainer, WritingsBox, SocialBox, CreationsBox, MiscBox };

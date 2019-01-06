import React, { useEffect, useContext } from "react";
import classNames from "classnames";

import { default as BoxContext } from "../Context";

function BaseBox({ name, className, onClick, ...rest }) {
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

function Box({ name, title, body }) {
  const { clickedBoxes, setClickedBox } = useContext(BoxContext);
  return (
    <BaseBox
      name={name}
      className={getBoxClass(name)}
      onClick={() => setClickedBox(name)}
    >
      <Title title={title} />
      <Body>{clickedBoxes[name] && <Body>{body}</Body>}</Body>
    </BaseBox>
  );
}

export default Box;

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

function Box({ name, title, body }) {
  const { clickedBoxes, setClickedBox } = useContext(BoxContext);

  function getBoxClass(boxName) {
    return clickedBoxes[boxName]
      ? classNames(boxName, "clicked", "shadow")
      : classNames(boxName);
  }

  return (
    <BaseBox
      name={name}
      className={getBoxClass(name)}
      onClick={() => setClickedBox(name)}
    >
      <Title title={title} />
      {clickedBoxes[name] && (
        <Body>
          <div>
            {body}
            <button className="close-button" type="button">
              Close
            </button>
          </div>
        </Body>
      )}
    </BaseBox>
  );
}

export default Box;

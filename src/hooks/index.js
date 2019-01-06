import { useState } from "react";
import classNames from "classnames";

function useClassNameToggle(toggleClassName) {
  const [className, setBlogBoxClicked] = useState("");

  function toggle() {
    if (className) setBlogBoxClicked("");
    else setBlogBoxClicked(classNames(toggleClassName, "shadow"));
  }

  return { className, toggle };
}

export { useClassNameToggle };

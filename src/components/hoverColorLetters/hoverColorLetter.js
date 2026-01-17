import { useRef } from "react";
import classes from "./hoverColorLetter.module.css";

export const HoverColorLetter = (props) => {
  const { letter, getLetterColor, defaultColor } = props;
  const spanRef = useRef();

  const hoverHandler = () => {
    const color = getLetterColor();
    console.log(letter, "color:", color);
    spanRef.current.style.setProperty("--color", color);
    spanRef.current.style.setProperty("--default-color", defaultColor);
    spanRef.current.classList.add(classes.anim_color);
  };

  const handleAnimationEnd = () => {
    spanRef.current.classList.remove(classes.anim_color);
  };

  return (
    <span
      ref={spanRef}
      className={classes.letter}
      style={{ "--default-color": defaultColor }}
      onMouseEnter={hoverHandler}
      onAnimationEnd={handleAnimationEnd}
    >
      {letter}
    </span>
  );
};

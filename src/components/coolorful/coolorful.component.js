import classes from "./coolorful.module.css";
import { HoverColorLetters } from "../hoverColorLetters/hoverColorLetters";

export const Coolorful = () => {
  return (
    <div className={classes.container}>
      <HoverColorLetters
        text="Make something coolorful!"
        defaultColor= "#ececec"
        colors={[
          "#e60000",
          "#ff3300",
          "#ff6600",
          "#ff9900",
          "#ffcc00",
          "#ffe600",
          "#ccff00",
          "#99ff00",
          "#66ff33",
          "#33ff66",
          "#00ff99",
          "#00ffcc",
          "#00ccff",
          "#0099ff",
          "#0066ff",
          "#3300ff",
          "#6600ff",
          "#9900ff",
          "#cc00ff",
          "#ff00cc",
          "#ff0099",
          "#ff0066",
        ]}
      />
    </div>
  );
};

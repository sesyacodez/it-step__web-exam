import classes from "./hero.module.css";
import { useNavigate } from "react-router-dom";
import { HoverColorLetters } from "../hoverColorLetters/hoverColorLetters";
import { ColorGradient } from "../colorGradient/ColorGradient";

export const Hero = () => {
  const navigate = useNavigate();
  const handleStartGenerator = () => navigate("/generator");

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.titles}>
          <div className={classes.title}>
            <HoverColorLetters
              className={classes.heroTitle}
              text="The super fast color palettes generator!"
              defaultColor="black"
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
            <img src="/img/and_much_more.svg" alt="and much more" />
          </div>
          <div className={classes.subtitle}>
            <h2 className={classes.largeText}>
              Create the perfect palette or get inspired by thousands of
              beautiful color schemes.
            </h2>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <button onClick={handleStartGenerator}>Start the Generator</button>
          <button>Explore 10M+ Palettes</button>
        </div>
      </div>
      <div className={classes.gifContainer}>
        <div className={classes.PaletteGif}>
          <ColorGradient />
        </div>
      </div>
    </div>
  );
};

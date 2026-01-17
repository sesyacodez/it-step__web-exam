import classes from "./tools.module.css";
import { useNavigate } from "react-router-dom";

export const Tools = () => {
  const navigate = useNavigate();
  const handleStartGenerator = () => {
    navigate("/generator");
    window.scrollTo(0, 0);
  };
  return (
    <div className={classes.container} id="tools-section">
      <h2 className={classes.title}>OUR TOOLS, LOVED BY MILLIONS</h2>
      <div className={classes.toolList}>
        <div
          className={`${classes.toolItem} ${classes.generator}`}
          onClick={handleStartGenerator}
        >
          <h3 className={classes.toolTitle}>Palette Generator</h3>
          <p className={classes.toolDescription}>
            Create beautiful color schemes in seconds with the worldwide loved
            palette tool. Just hit the spacebar!
          </p>
          <div className={classes.buttonContainer}>
            <button className={classes.toolButton}>START THE GENERATOR</button>
            <p className={classes.arrow}>→</p>
          </div>
        </div>
        <div className={`${classes.toolItem} ${classes.explore}`}>
          <h3 className={classes.toolTitle}>Explore Palettes</h3>
          <p className={classes.toolDescription}>
            Get inspired by thousands of beautiful color schemes. Search by
            colors, syles, topics or hex values.
          </p>
          <div className={classes.buttonContainer}>
            <button className={classes.toolButton}>
              EXPLORE 10M+ PALETTES
            </button>
            <p className={classes.arrow}>→</p>
          </div>
        </div>
        <div className={`${classes.toolItem} ${classes.imagePicker}`}>
          <h3 className={classes.toolTitle}>Image Picker</h3>
          <p className={classes.toolDescription}>
            Extract beautiful colors from your photos and turn them into
            palettes for your projects.
          </p>
          <div className={classes.buttonContainer}>
            <button className={classes.toolButton}>LAUNCH IMAGE PICKER</button>
            <p className={classes.arrow}>→</p>
          </div>
        </div>
        <div className={`${classes.toolItem} ${classes.contrastChecker}`}>
          <h3 className={classes.toolTitle}>Contrast Checker</h3>
          <p className={classes.toolDescription}>
            Calculate the contrast ratio of text and background colors to make
            your content more accessible.
          </p>
          <div className={classes.buttonContainer}>
            <button className={classes.toolButton}>
              TRY THE CONTRAST CHECKER
            </button>
            <p className={classes.arrow}>→</p>
          </div>
        </div>
        <div className={`${classes.toolItem} ${classes.visualizer}`}>
          <h3 className={classes.toolTitle}>Palette Visualizer</h3>
          <p className={classes.toolDescription}>
            Preview your colors on real designs to see how they look in context
            before using them in your projects.
          </p>
          <div className={classes.buttonContainer}>
            <button className={classes.toolButton}>OPEN THE VISUALIZER</button>
            <p className={classes.arrow}>→</p>
          </div>
        </div>
        <div className={`${classes.toolItem} ${classes.colorPicker}`}>
          <h3 className={classes.toolTitle}>Color Picker</h3>
          <p className={classes.toolDescription}>
            Get useful color information like meaning, usage, variations,
            accessibility and converstion.
          </p>
          <div className={classes.buttonContainer}>
            <button className={classes.toolButton}>
              LAUNCH THE COLOR PICKER
            </button>
            <p className={classes.arrow}>→</p>
          </div>
        </div>
        <div className={`${classes.toolItem} ${classes.tailwind}`}>
          <h3 className={classes.toolTitle}>Tailwind Colors</h3>
          <p className={classes.toolDescription}>
            Preview Tailwind CSS colors on real designs to see how they look in
            context before using them in your projects.
          </p>
          <div className={classes.buttonContainer}>
            <button className={classes.toolButton}>
              GET YOUR TAILWIND COLORS
            </button>
            <p className={classes.arrow}>→</p>
          </div>
        </div>
        <div className={`${classes.toolItem} ${classes.colorBot}`}>
          <h3 className={classes.toolTitle}>Color Bot</h3>
          <p className={classes.toolDescription}>
            Chat with our AI-powered Color Bot, ask questions and get color
            suggestions for your projects.
          </p>
          <div className={classes.buttonContainer}>
            <button className={classes.toolButton}>CHAT WITH COLOR BOT</button>
            <p className={classes.arrow}>→</p>
          </div>
        </div>
      </div>
    </div>
  );
};

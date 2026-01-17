import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomPalette } from "../../shared/colorPaletteGenerator";
import classes from "./colorOfTheDay.module.css";

function ColorOfTheDay() {
  const [colorOfTheDay, setColorOfTheDay] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const randomColors = getRandomPalette(1);
    setColorOfTheDay(randomColors[0]);
  }, []);

  const handleColorOfTheDay = () => {
    if (colorOfTheDay) {
      navigate(`/colors/${colorOfTheDay.replace("#", "")}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        Coolors is the lightning-fast, ultra-intuitive color palette generator
        for designers, creators, and anyone seeking visual harmony. Instantly
        generate beautiful palettes by hitting the spacebar, or explore millions
        of popular ones. Extract colors from images, check accessibility, and
        preview them on real designs. Organize your palettes into projects and
        export them in multiple formats — effortlessly across web, apps, and
        plugins. Now with AI!
      </div>
      <div className={classes.card} onClick={handleColorOfTheDay}>
        <h3 className={classes.title}>COLOR OF THE DAY</h3>
        <div className={classes.content}>
          <div className={classes.colorSection}>
            <div
              className={classes.colorBox}
              style={{
                backgroundColor: colorOfTheDay,
              }}
            ></div>
            <p className={classes.hexCode}>{colorOfTheDay}</p>
          </div>
          <div className={classes.info}>
            <h2 className={classes.colorName}>Beautiful Color</h2>
            <p className={classes.description}>
              Intense, exuding strength, primordial energy, mystery, and allure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ColorOfTheDay };

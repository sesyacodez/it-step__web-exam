import { useState, useEffect } from "react";
import { getRandomPalette } from "../shared/colorPaletteGenerator";
import { Header } from "../components/header/header.component";
import classes from "./GeneratorPage.module.css";

const COLOR_NAMES = [
  "Pretty Color 1",
  "Pretty Color 2",
  "Pretty Color 3",
  "Pretty Color 4",
  "Pretty Color 5",
  "Pretty Color 6",
  "Pretty Color 7",
];

function GeneratorPage() {
  const [colors, setColors] = useState([]);
  const [saved, setSaved] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredDivider, setHoveredDivider] = useState(null);

  useEffect(() => {
    setColors(getRandomPalette(5));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        setColors(getRandomPalette(colors.length));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [colors.length]);

  const handleSave = () => {
    if (!saved) {
      setSaved(true);
    }
  };

  const handleAddColor = (index) => {
    if (colors.length < 7) {
      const newColors = [...colors];
      const newColor = getRandomPalette(1)[0];
      newColors.splice(index + 1, 0, newColor);
      setColors(newColors);
    }
  };

  const isLightColor = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128;
  };

  return (
    <div className={classes.generatorPage}>
      <Header />

      <div className={classes.toolbar}>
        <p className={classes.hint}>
          Press the spacebar to generate color palettes!
        </p>
        <button className={classes.saveButton} onClick={handleSave}>
          <svg viewBox="0 0 24 24" width="20" height="20">
            {saved ? (
              <path
                fill="#000"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            ) : (
              <path
                fill="currentColor"
                d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
              />
            )}
          </svg>
          Save
        </button>
      </div>

      <div className={classes.paletteContainer}>
        {colors.map((color, idx) => (
          <div key={idx} className={classes.colorWrapper}>
            <div
              className={classes.colorBlock}
              style={{ backgroundColor: color }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === idx && (
                <div className={classes.colorActions}>
                  <button
                    className={classes.actionButton}
                    style={{ color: isLightColor(color) ? "#000" : "#fff" }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path
                        fill="currentColor"
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                      />
                    </svg>
                  </button>
                  <button
                    className={classes.actionButton}
                    style={{ color: isLightColor(color) ? "#000" : "#fff" }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path
                        fill="currentColor"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      />
                    </svg>
                  </button>
                  <button
                    className={classes.actionButton}
                    style={{ color: isLightColor(color) ? "#000" : "#fff" }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path
                        fill="currentColor"
                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                      />
                    </svg>
                  </button>
                  <button
                    className={classes.actionButton}
                    style={{ color: isLightColor(color) ? "#000" : "#fff" }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path
                        fill="currentColor"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                  </button>
                  <button
                    className={classes.actionButton}
                    style={{ color: isLightColor(color) ? "#000" : "#fff" }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path
                        fill="currentColor"
                        d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"
                      />
                    </svg>
                  </button>
                  <button
                    className={classes.actionButton}
                    style={{ color: isLightColor(color) ? "#000" : "#fff" }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path
                        fill="currentColor"
                        d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                      />
                    </svg>
                  </button>
                  <button
                    className={classes.actionButton}
                    style={{ color: isLightColor(color) ? "#000" : "#fff" }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path
                        fill="currentColor"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                      />
                    </svg>
                  </button>
                  <button
                    className={classes.actionButton}
                    style={{ color: isLightColor(color) ? "#000" : "#fff" }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path
                        fill="currentColor"
                        d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
                      />
                    </svg>
                  </button>
                </div>
              )}

              <div
                className={classes.colorInfo}
                style={{ color: isLightColor(color) ? "#000" : "#fff" }}
              >
                <span className={classes.hexCode}>
                  {color.replace("#", "").toUpperCase()}
                </span>
                <span className={classes.colorName}>
                  {COLOR_NAMES[idx % COLOR_NAMES.length]}
                </span>
              </div>
            </div>

            {idx < colors.length - 1 && colors.length < 7 && (
              <div
                className={classes.divider}
                onMouseEnter={() => setHoveredDivider(idx)}
                onMouseLeave={() => setHoveredDivider(null)}
              >
                {hoveredDivider === idx && (
                  <button
                    className={classes.addButton}
                    onClick={() => handleAddColor(idx)}
                  >
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path
                        fill="currentColor"
                        d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                      />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GeneratorPage;

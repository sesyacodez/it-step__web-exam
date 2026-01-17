import classes from "./colorGradient.module.css";
import { useState, useEffect } from "react";

export const ColorGradient = ({
  palettes = [
    ["#FF6B6B", "#FFB86B", "#FFD93D", "#6BFF95", "#6BFFD9"],
    ["#1A1A2E", "#162447", "#1F4068", "#1B1B3A", "#0F0F1F"],
    ["#FF3C38", "#FF6F61", "#FF9A76", "#FFC6A0", "#FFE8C7"],
    ["#8E44AD", "#2980B9", "#27AE60", "#F39C12", "#C0392B"],
    ["#F72585", "#7209B7", "#3A0CA3", "#4361EE", "#4CC9F0"],
    ["#FFB347", "#FFCC33", "#FFF56B", "#D4FF6A", "#8DFF6A"],
    ["#FF6EC7", "#FF92AB", "#FFA2CF", "#FFC6E3", "#FFFFFF"],
    ["#00F5D4", "#00C9FF", "#0077FF", "#001AFF", "#1A1A8C"],
    ["#FF3F34", "#FF7D70", "#FFD1C1", "#6BFF95", "#33FFA8"],
    ["#6A0572", "#8D1A87", "#FF6B6B", "#FFB347", "#F5F5DC"],
    ["#08D9D6", "#66F9BC", "#FFD93D", "#FF6B6B", "#FF3F34"],
    ["#4361EE", "#89CFF0", "#F72585", "#FF9A76", "#FFD93D"],
    ["#2E2D88", "#3A0CA3", "#7209B7", "#F72585", "#FFB6C1"],
    ["#FFE5C7", "#FFCFA5", "#FFA261", "#FF8C42", "#FF6F00"],
    ["#6BCB77", "#33FF9E", "#FFC6E3", "#FF3F34", "#1A1A1A"],
  ],
}) => {
  const [currentPaletteIndex, setCurrentPaletteIndex] = useState(0);
  const currentPalette = palettes[currentPaletteIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPaletteIndex((prev) => (prev + 1) % palettes.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [palettes.length]);

  return (
    <div className={classes.container}>
      {currentPalette.map((color, index) => (
        <div
          key={index}
          className={classes.colorBand}
          style={{
            backgroundColor: color,
            animationDelay: `${index * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

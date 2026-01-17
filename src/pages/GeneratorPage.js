import { useState, useEffect } from "react";
import { getRandomPalette } from "../shared/colorPaletteGenerator";

function GeneratorPage() {
  const [colors, setColors] = useState([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setColors(getRandomPalette(5));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        setColors(getRandomPalette(5));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="GeneratorPage">
      <h1>Color Generator</h1>
      <button
        onClick={() => setSaved(!saved)}
        style={{ color: saved ? "black" : "red" }}
      >
        ♡ Save
      </button>
      <div>
        {colors.map((color, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: color, width: "100px", height: "100px" }}
          >
            {color}
          </div>
        ))}
      </div>
      <p>Press spacebar to generate new colors</p>
    </div>
  );
}

export default GeneratorPage;

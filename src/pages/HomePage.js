import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/header/header.component.js";
import { HoverColorLetters } from "../components/hoverColorLetters/hoverColorLetters.js";
import { getRandomPalette } from "../shared/colorPaletteGenerator";

function HomePage() {
  const [colorOfTheDay, setColorOfTheDay] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const randomColors = getRandomPalette(1);
    setColorOfTheDay(randomColors[0]);
  }, []);

  const handleStartGenerator = () => navigate("/generator");
  const handleColorOfTheDay = () => {
    if (colorOfTheDay) {
      navigate(`/colors/${colorOfTheDay}`);
    }
  };

  return (
    <div className="App">
      <Header />
      <div>
        <button onClick={handleStartGenerator}>Start Generator</button>
      </div>
      <div
        onClick={handleColorOfTheDay}
        style={{
          cursor: "pointer",
          padding: "10px",
          backgroundColor: colorOfTheDay,
        }}
      >
        Color of the Day: {colorOfTheDay}
      </div>
      <HoverColorLetters
        text="Aliquip non consectetur consectetur do duis pariatur duis laborum."
        defaultColor="black"
        colors={["#6369d1", "#60e1e0", "#d8d2e1", "#b88e8d", "#34435e"]}
      />
    </div>
  );
}

export default HomePage;

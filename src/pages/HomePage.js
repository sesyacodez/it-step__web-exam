import { useNavigate } from "react-router-dom";
import { Header } from "../components/header/header.component.js";
import { HoverColorLetters } from "../components/hoverColorLetters/hoverColorLetters.js";
import { Hero } from "../components/hero/hero.component.js";
import { Companies } from "../components/companies/companies.component.js";
import { ColorOfTheDay } from "../components/colorOfTheDay/colorOfTheDay.component.js";
import { Tools } from "../components/tools/tools.component.js";
import { Resources } from "../components/resources/resources.component.js";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Header />
      <Hero />
      <Companies />
      <ColorOfTheDay />
      <Tools />
      <Resources />
      <HoverColorLetters
        text="Aliquip non consectetur consectetur do duis pariatur duis laborum."
        defaultColor="black"
        colors={["#6369d1", "#60e1e0", "#d8d2e1", "#b88e8d", "#34435e"]}
      />
    </div>
  );
}

export default HomePage;

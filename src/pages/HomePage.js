import { useNavigate } from "react-router-dom";
import { Header } from "../components/header/header.component.js";
import { HoverColorLetters } from "../components/hoverColorLetters/hoverColorLetters.js";
import { Hero } from "../components/hero/hero.component.js";
import { Companies } from "../components/companies/companies.component.js";
import { ColorOfTheDay } from "../components/colorOfTheDay/colorOfTheDay.component.js";

function HomePage() {
  const navigate = useNavigate();

  const handleStartGenerator = () => navigate("/generator");

  return (
    <div className="App">
      <Header />
      <Hero />
      <Companies />
      <ColorOfTheDay />
      <HoverColorLetters
        text="Aliquip non consectetur consectetur do duis pariatur duis laborum."
        defaultColor="black"
        colors={["#6369d1", "#60e1e0", "#d8d2e1", "#b88e8d", "#34435e"]}
      />
    </div>
  );
}

export default HomePage;

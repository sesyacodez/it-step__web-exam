import { useNavigate } from "react-router-dom";
import { Header } from "../components/header/header.component.js";
import { HoverColorLetters } from "../components/hoverColorLetters/hoverColorLetters.js";
import { Hero } from "../components/hero/hero.component.js";
import { Companies } from "../components/companies/companies.component.js";
import { ColorOfTheDay } from "../components/colorOfTheDay/colorOfTheDay.component.js";
import { Tools } from "../components/tools/tools.component.js";
import { Resources } from "../components/resources/resources.component.js";
import { Apps } from "../components/apps/apps.component.js";
import { Coolorful } from "../components/coolorful/coolorful.component.js";
import { Footer } from "../components/footer/footer.component.js";

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
      <Apps />
      <Coolorful />
      <Footer />
    </div>
  );
}

export default HomePage;

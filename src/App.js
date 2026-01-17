import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.js";
import LoginPage from "./pages/LoginPage.js";
import RegistrationPage from "./pages/RegistrationPage.js";
import GeneratorPage from "./pages/GeneratorPage.js";
import ColorPage from "./pages/ColorPage.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/generator" element={<GeneratorPage />} />
        <Route path="/colors/:colorHex?" element={<ColorPage />} />
      </Routes>
    </div>
  );
}

export default App;

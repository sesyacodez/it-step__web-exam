import classes from "./header.module.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const handleSignIn = () => navigate("/login");
  const handleSignUp = () => navigate("/registration");
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleToolsClick = () => {
    navigate("/");
    setTimeout(() => {
      const toolsElement = document.getElementById("tools-section");
      if (toolsElement) {
        toolsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className={classes.container}>
      <div
        className={classes.title}
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      >
        <img src="/img/coolors-logo.png" alt="Blue coolors Logo" />
      </div>
      <div className={classes.menu}>
        <div className={classes.toolbuttons}>
          <button onClick={handleToolsClick}>Tools</button>
          <button>Go Pro</button>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.authbuttons}>
          <button onClick={handleSignIn}>Sign In</button>
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

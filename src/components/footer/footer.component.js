import classes from "./footer.module.css";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  const handleStartGenerator = () => navigate("/generator");

  return (
    <footer className={classes.container}>
      <div className={classes.column}>
        <h3 className={classes.columnTitle}>TOOLS</h3>
        <button onClick={handleStartGenerator}>Generate your palettes</button>
        <button>Explore popular palettes</button>
        <button>Extract palette from image</button>
        <button>Contrast checker</button>
        <button>Preview palettes on designs</button>
        <button>Color picker</button>
        <button>Tailwind Colors</button>
        <button>Color Bot</button>
      </div>

      <div className={classes.column}>
        <h3 className={classes.columnTitle}>DISCOVER</h3>
        <button>List of colors</button>
        <button>Browse gradients</button>
        <button>Create a gradient</button>
        <button>Make a gradient palette</button>
        <button>Image converter</button>
        <button>Recolor your own design</button>
        <button>Create a collage</button>
        <button>Browse free fonts</button>
        <button>Font Generator</button>
      </div>

      <div className={classes.column}>
        <h3 className={classes.columnTitle}>APPS</h3>
        <button>iOS App</button>
        <button>Figma Plugin</button>
        <button>Adobe Extension</button>
        <button>Chrome Extension</button>
      </div>

      <div className={classes.column}>
        <h3 className={classes.columnTitle}>COMPANY</h3>
        <button>Pricing</button>
        <button>License</button>
        <button>Terms of service</button>
        <button>Privacy policy</button>
        <button>Cookie policy</button>
        <button>Manage cookies</button>
        <button>Help center</button>
        <button>Advertise</button>
        <button>Affiliate</button>
        <button>Contact</button>
        <button>Feature Requests</button>
      </div>
    </footer>
  );
};

import { useParams } from "react-router-dom";
import { Header } from "../components/header/header.component";
import { Footer } from "../components/footer/footer.component";
import classes from "./ColorPage.module.css";

function hexToRgb(hex) {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return { r, g, b };
}

function rgbToCmyk(r, g, b) {
  if (r === 0 && g === 0 && b === 0) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  const k = 1 - Math.max(rNorm, gNorm, bNorm);
  const c = Math.round(((1 - rNorm - k) / (1 - k)) * 100);
  const m = Math.round(((1 - gNorm - k) / (1 - k)) * 100);
  const y = Math.round(((1 - bNorm - k) / (1 - k)) * 100);
  return { c, m, y, k: Math.round(k * 100) };
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
      default:
        h = 0;
    }
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function rgbToHsb(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    v = max;

  const d = max - min;
  s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
      default:
        h = 0;
    }
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    b: Math.round(v * 100),
  };
}

function ColorPage() {
  const { colorHex } = useParams();

  const sanitizedHex = (colorHex || "000000")
    .toLowerCase()
    .slice(0, 6)
    .padEnd(6, "0");

  const rgb = hexToRgb(sanitizedHex);
  const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const hsb = rgbToHsb(rgb.r, rgb.g, rgb.b);

  return (
    <div className={classes.colorPage}>
      <Header />
      <div className={classes.colorContent}>
        <div className={classes.breadcrumb}>
          <span>Colors</span>
          <span className={classes.separator}>›</span>
          <span>Color Details</span>
        </div>

        <div className={classes.colorHeader}>
          <h1 className={classes.colorTitle}>
            Color #{sanitizedHex.toUpperCase()}
          </h1>
          <p className={classes.colorDescription}>
            Intense depths fill any space with intrigue and boldness, channeling
            mystery and hidden elegance.
          </p>
        </div>

        <div
          className={classes.colorPreview}
          style={{ backgroundColor: `#${sanitizedHex}` }}
        >
          <span className={classes.hexDisplay}>{sanitizedHex}</span>
        </div>

        <section className={classes.conversion}>
          <h2 className={classes.conversionTitle}>Conversion</h2>
          <div className={classes.conversionGrid}>
            <div className={classes.conversionColumn}>
              <div className={classes.conversionRow}>
                <span className={classes.label}>HEX</span>
                <span className={classes.value}>
                  {sanitizedHex.toUpperCase()}
                </span>
              </div>
              <div className={classes.conversionRow}>
                <span className={classes.label}>RGB</span>
                <span className={classes.value}>
                  {rgb.r}, {rgb.g}, {rgb.b}
                </span>
              </div>
              <div className={classes.conversionRow}>
                <span className={classes.label}>CMYK</span>
                <span className={classes.value}>
                  {cmyk.c}, {cmyk.m}, {cmyk.y}, {cmyk.k}
                </span>
              </div>
              <div className={classes.conversionRow}>
                <span className={classes.label}>HSB</span>
                <span className={classes.value}>
                  {hsb.h}, {hsb.s}, {hsb.b}
                </span>
              </div>
              <div className={classes.conversionRow}>
                <span className={classes.label}>HSL</span>
                <span className={classes.value}>
                  {hsl.h}, {hsl.s}, {hsl.l}
                </span>
              </div>
            </div>
            <div className={classes.conversionColumn}>
              <div className={classes.conversionRow}>
                <span className={classes.label}>LAB</span>
                <span className={classes.value}>13, 17, -13</span>
              </div>
              <div className={classes.conversionRow}>
                <span className={classes.label}>XYZ</span>
                <span className={classes.value}>2, 2, 3</span>
              </div>
              <div className={classes.conversionRow}>
                <span className={classes.label}>LCH</span>
                <span className={classes.value}>13, 21, 322</span>
              </div>
              <div className={classes.conversionRow}>
                <span className={classes.label}>LUV</span>
                <span className={classes.value}>13, 8, -13</span>
              </div>
              <div className={classes.conversionRow}>
                <span className={classes.label}>HWB</span>
                <span className={classes.value}>291, 10, 80</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default ColorPage;

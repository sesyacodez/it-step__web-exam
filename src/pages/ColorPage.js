import { useParams } from "react-router-dom";

function ColorPage() {
  const { colorHex } = useParams();

  return (
    <div className="ColorPage">
      <h1>Color: {colorHex}</h1>
      <div
        style={{
          backgroundColor: `#${colorHex}`,
          width: "200px",
          height: "200px",
        }}
      />
      <section className="conversion">
        <div>
          <label>HEX: </label>
          <input type="text" value={colorHex} readOnly />
        </div>
        <div>
          <label>RGB: </label>
          <input type="text" placeholder="RGB value" />
        </div>
        <div>
          <label>CMYK: </label>
          <input type="text" placeholder="CMYK value" />
        </div>
        <div>
          <label>HSB: </label>
          <input type="text" placeholder="HSB value" />
        </div>
        <div>
          <label>HSL: </label>
          <input type="text" placeholder="HSL value" />
        </div>
      </section>
    </div>
  );
}

export default ColorPage;

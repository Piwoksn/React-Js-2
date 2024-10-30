import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#9c3a3a");
  const colorSelect = (event) => setColor(event.target.value);

  const styles = {
    backgroundColor: `${color}`,
    border: "1px solid black",
    padding: "20px",
    width: "200px",
  };
  //   return

  return (
    <div>
      <div className="display" style={styles}>
        <p>{color}</p>
      </div>
      <input type="color" value={color} onChange={colorSelect} />
    </div>
  );
}

export default ColorPicker;

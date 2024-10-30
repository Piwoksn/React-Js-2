import React, { useState } from "react";

function OnChangeEvent() {
  const [name, setName] = useState("Guest");

  const setEventHandler = (event) => {
    setName(event.target.value);
  };
  // for Number
  const [qty, setQty] = useState(0);

  const handleQtyChange = (e) => setQty(e.target.value);

  // textarea

  return (
    <div>
      <input type="text" value={name} onChange={setEventHandler} />
      <h3>Name: {name}</h3>
      <input type="number" value={qty} onChange={handleQtyChange} />
      <h3>Name: {qty}</h3>
    </div>
  );
}
export default OnChangeEvent;

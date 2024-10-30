import React, { useState } from "react";

function OnChangeEvent() {
  const [name, setName] = useState("Guest");

  const setEventHandler = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={setEventHandler} />
      <h3>Name: {name}</h3>
    </div>
  );
}
export default OnChangeEvent;

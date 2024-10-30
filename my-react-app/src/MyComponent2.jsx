import React, { useState } from "react";
// onchange effect
function OnChangeEvent() {
  const [name, setName] = useState("Guest");

  const changename = (event) => {
    setName(event.target.value);
  };
  return (
    <>
      <input value={name} type="text" onChange={changename} />

      <h3>Name: {name}</h3>
    </>
  );
}

export default OnChangeEvent;

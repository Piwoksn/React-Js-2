import React, { useState } from "react";

function Counter() {
  let [name, setName] = useState();
  const updateName = () => {
    setName("McCoy");
  };
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
    </div>
  );
}

export default Counter;

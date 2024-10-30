import React, { useState } from "react";

function Counter() {
  const [name, setName] = useState("Guest");
  const updateName = () => {
    setName("McCoy");
  };
  //   for age
  const [age, setAge] = useState(0);

  const increment = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={increment}>Increment Age</button>
    </div>
  );
}

export default Counter;

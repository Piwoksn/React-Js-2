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

  //   for bool
  const [isEmployed, setisEmployed] = useState(false);
  const toggleEmployedStatus = () => {
    setisEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={increment}>Increment Age</button>

      <p>Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Check</button>
    </div>
  );
}

export default Counter;

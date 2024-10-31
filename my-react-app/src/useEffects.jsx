import React, { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  function add() {
    setCount((c) => c + 1);
  }
  function minus() {
    setCount((c) => c - 1);
  }

  const changeColor = () => {
    setColor((c) => (c === "green" ? "red" : "green"));
  };
  return (
    <>
      <h1 style={{ color: color }}>Count: {count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={minus}>Subtract</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
      <br />
      <br />
    </>
  );
}

export default UseEffect;

import React, { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  function add() {
    setCount((c) => c + 1);
  }
  function minus() {
    setCount((c) => c - 1);
  }
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={minus}>Subtract</button>
      <br />
      <br />
    </>
  );
}

export default UseEffect;

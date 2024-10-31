import React, { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  function add() {
    setCount((c) => c + 1);
  }
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={add}>Add</button>
      <br />
      <br />
    </>
  );
}

export default UseEffect;

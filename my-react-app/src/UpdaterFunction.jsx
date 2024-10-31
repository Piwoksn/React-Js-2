import React, { useState } from "react";
function UpdaterFunction() {
  const [count, setCount] = useState(0);
  const plus = () => setCount((c) => c + 1);
  setCount((c) => c + 1);
  setCount((c) => c + 1);
  const minus = () => setCount((c) => c - 1);
  const reset = () => setCount(0);
  //   return
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={minus}>-</button>
      <button onClick={reset}>0</button>
      <button onClick={plus}>+</button>
    </>
  );
}

export default UpdaterFunction;

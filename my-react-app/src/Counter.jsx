import React, { useState } from "react";

function Counter() {
  let count = 2;
  //   buttons
  function decrease() {
    count = count - 1;
    return console.log(count);
  }

  const reset = () => {
    count = 0;
    return console.log(count);
  };

  const increase = () => {
    count++;
    return console.log(count);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => decrease()}>Decrement</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => increase()}>Increment</button>
    </>
  );
}

export default Counter;

import React, { useState } from "react";
function Counter() {
  const [counter, setCounter] = useState(0);

  const add = () => setCounter(counter + 1);

  const minus = () => setCounter(counter - 1);

  const reset = () => setCounter(0);

  return (
    <div className="box">
      <div className="display">
        <h1>{counter}</h1>
      </div>
      <div className="button">
        <button onClick={minus} className="decrease">
          Decrement
        </button>
        <button onClick={reset} className="reset">
          Reset
        </button>
        <button onClick={add} className="increase">
          Increment
        </button>
      </div>
    </div>
  );
}
export default Counter;

import React, { useState, useEffect, useRef } from "react";

function MyComponent2() {
  const ref = useRef(0);

  useEffect(() => {
    console.log("Component rendered");
  });

  function handleClick() {
    ref.current++;
    console.log(ref.current);
  }
  return <button onClick={handleClick}>Click Me!</button>;
}

export default MyComponent2;

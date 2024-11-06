import React, { useEffect, useState } from "react";

function Continuation() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  useEffect(() => {
    document.title = `size = ${width} : ${height}`;
  }, [width, height]);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </>
  );
}

export default Continuation;

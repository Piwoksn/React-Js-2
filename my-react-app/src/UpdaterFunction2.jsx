import React, { useState } from "react";

function UpdaterFunction2() {
  const [car, setCar] = useState({
    year: 2024,
    make: "BMW",
    model: "X12",
  });

  const handleYearChange = (event) => {
    setCar({ ...car, year: 2025 });
  };
  const handleMakeChange = (event) => {};
  const handleModelChange = (event) => {};
  return (
    <div>
      <p>
        My Favorite car is: {car.year} {car.make} {car.model}
      </p>

      <input type="number" value={car.year} onChange={handleYearChange} />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <input type="text" value={car.model} onChange={handleModelChange} />
    </div>
  );
}

export default UpdaterFunction2;

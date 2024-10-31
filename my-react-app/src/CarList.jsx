import React, { useState } from "react";

function ListCars() {
  const [cars, setCars] = useState([]);

  const [carYear, setYear] = useState(new Date().getFullYear());

  const [carMake, setMake] = useState("");

  const [carModel, setModel] = useState("");

  //   functions for event
  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCars((c) => [...c, newCar]);

    setYear(new Date().getFullYear());
    setMake("");
    setModel("");
  }
  function handleRemoveCar(index) {
    setCars((c) => c.filter((element, i) => i !== index));
  }
  function handleYearCar(event) {
    setYear(event.target.value);
  }
  function handleMakeCar(event) {
    setMake(event.target.value);
  }
  function handleModelCar(event) {
    setModel(event.target.value);
  }

  //   return
  return (
    <div>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleYearCar} />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeCar}
        placeholder="Enter car make"
      />
      <input
        type="text"
        value={carModel}
        onChange={handleModelCar}
        placeholder="Enter car model"
      />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}
export default ListCars;

import React, { useState } from "react";
function FoodList() {
  const [foods, setFood] = useState(["Orange", "Mango"]);

  const handleAddFood = () => {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFood((f) => [...f, newFood]);
  };
  // return
  return (
    <div>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>

      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add</button>
      <button>Remove</button>
    </div>
  );
}

export default FoodList;

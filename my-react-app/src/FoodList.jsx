import React, { useState } from "react";
function FoodList() {
  const [foods, setFood] = useState(["Orange", "Mango"]);

  const handleAddFood = () => {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFood((f) => [...f, newFood]);
  };

  const handleRemoveFood = (index) => {
    setFood(foods.filter((_, i) => i !== index));
  };
  // return
  return (
    <div>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>

      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add</button>
    </div>
  );
}

export default FoodList;

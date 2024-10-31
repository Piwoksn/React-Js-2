import React, { useState } from "react";

function ToDoList() {
  const [toDo, setToDO] = useState([
    "Take a Walk with Rosky",
    "Go shopping with Mum",
    "Prepare for Exams",
  ]);

  const [newToDO, setNewToDO] = useState();
  // return
  return (
    <div className="body">
      <div className="to-to-list">
        <h1>To-Do-List</h1>
        <input type="text" className="addInput" />
        <button className="add-button">Add</button>

        <ol>
          <li>{toDo.map()}</li>
        </ol>
      </div>
    </div>
  );
}
export default ToDoList;

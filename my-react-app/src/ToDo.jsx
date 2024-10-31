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
        <input type="text" className="addInput" placeholder="Add new item" />
        <button className="add-button">Add</button>

        <ol>
          {toDo.map((element, index) => (
            <li key={index}>
              <span className="text">{element}</span>
              <button className="delete-button">Delete</button>
              <button className="move-up">Up</button>
              <button className="move-down">Down</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default ToDoList;

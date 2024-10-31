import React, { useState } from "react";

function ToDoList() {
  const [toDo, setToDO] = useState([]);

  const [newToDO, setNewToDO] = useState();

  const add = () => {
    const activity = document.getElementById("new-item").value;
    setToDO((td) => [...td, activity]);
    document.getElementById("new-item").value = "";
  };

  const del = (index) => {
    setToDO((td) => td.filter((element, i) => i !== index));
  };

  // return
  return (
    <div className="body">
      <div className="to-to-list">
        <h1>To-Do-List</h1>
        <input
          type="text"
          id="new-item"
          className="addInput"
          placeholder="Add new item"
        />
        <button className="add-button" onClick={add}>
          Add
        </button>

        <ol>
          {toDo.map((element, index) => (
            <li key={index}>
              <span className="text">{element}</span>
              <button className="delete-button" onClick={() => del(index)}>
                Delete
              </button>
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

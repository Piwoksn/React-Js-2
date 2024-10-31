import React, { useState } from "react";

function ToDoList() {
  const [toDo, setToDO] = useState([]);

  const [newToDO, setNewToDO] = useState();

  const handleInput = (event) => {
    setNewToDO(event.target.value);
  };
  const add = () => {
    setToDO((td) => [...td, newToDO]);
    setNewToDO("");
  };

  const del = (index) => {
    setToDO((td) => td.filter((element, i) => i !== index));
  };

  function up(index) {
    setNewToDO();
    setToDO((td) => td.shift(index - 1));
  }
  function down(index) {}

  // return
  return (
    <div className="body">
      <div className="to-to-list">
        <h1>To-Do-List</h1>
        <input
          type="text"
          value={newToDO}
          onChange={handleInput}
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
              <button className="move-up" onClick={up}>
                Up
              </button>
              <button className="move-down" onClick={down}>
                Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default ToDoList;

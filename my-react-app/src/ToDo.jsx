import React, { useState } from "react";

function ToDoList() {
  const [toDo, setToDO] = useState([]);

  const [newToDO, setNewToDO] = useState();

  const handleInput = (event) => {
    setNewToDO(event.target.value);
  };
  const add = () => {
    if (newToDO.trim() !== "") {
      setToDO((td) => [...td, newToDO]);
      setNewToDO("");
    }
  };

  const del = (index) => {
    // setToDO((td) => td.filter((element, i) => i !== index));

    const newList = toDo.filter((element, i) => i !== index);
    setToDO(newList);
  };

  function up(index) {
    if (index > 0) {
      const updatedTask = [...toDo];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setToDO(updatedTask);
    }
  }
  function down(index) {
    if (index < toDo.length - 1) {
      const updatedTask = [...toDo];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setToDO(updatedTask);
    }
  }

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
              <button className="move-up" onClick={() => up(index)}>
                Up
              </button>
              <button className="move-down" onClick={() => down(index)}>
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

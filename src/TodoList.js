import React, { useState, useRef } from "react";
import TodoListItems from "./TodoListItems";
import "./Todolist.css";
import SketchExample from "./SketchExample";

const TodoList = () => {
  const todoItem = [
    {
      text: "test",
      key: Date.now(),
      done: false,
      background: "#f9f9f9"
    }
  ];

  const [bgColor, setColor] = useState("");
  const [item, setData] = useState(todoItem);
  const inputElement = useRef();

  const addItem = e => {
    e.preventDefault();
    let newItem;
    if (inputElement.current.value !== "") {
      newItem = {
        text: inputElement.current.value,
        key: Date.now(),
        done: false,
        background: bgColor
      };
    }
    setData([...item, newItem]);
    inputElement.current.value = "";
  };
  const markCompleted = key => {
    item.map(item => {
      if (key === item.key) {
        item.done = !item.done;
      }
    });
    setData([...item]);
  };
  const deleteItem = key => {
    const filteredItems = item.filter(item => {
      return item.key !== key;
    });

    setData(filteredItems);
  };
  const handleChangeComplete = color => {
    setColor(color.hex);
  };

  return (
    <div className="todoListMain">
      <h1>To do List</h1>
      <div className="header">
        <form onSubmit={addItem}>
          <div className="inputField">
            <input ref={inputElement} placeholder="enter task" required></input>
            <div className="picker-button inputField">
              <SketchExample
                background={bgColor}
                changeComplete={handleChangeComplete}
              />
            </div>
            <button type="submit" className="add-button">
              +
            </button>
          </div>
        </form>
      </div>
      <TodoListItems
        entries={item}
        completed={markCompleted}
        deleteItems={deleteItem}
      />
    </div>
  );
};

export default TodoList;

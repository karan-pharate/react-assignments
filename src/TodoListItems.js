import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import "./TodoListItems.css";

const TodoListItems = props => {
  const todoEntries = props.entries;

  const deleteItems = key => {
    props.deleteItems(key);
  };
  const completed = item => {
    props.completed(item);
  };

  const createTasks = item => {
    let classname = item.done === true ? "textContent done" : "textContent";
    const bgcolor = {
      background: `${item.background}`
    };
    return (
      <li className="task" key={item.key} style={bgcolor}>
        <input
          className="checkbox"
          onChange={() => completed(item.key)}
          type="checkbox"
        ></input>
        <p className={classname}> {item.text}</p>
        <button className="delete-btn" onClick={() => deleteItems(item.key)}>
          X
        </button>
      </li>
    );
  };

  const listItems = todoEntries.map(createTasks.bind(this));

  return (
    <div>
      <ul className="theList">{listItems}</ul>
    </div>
  );
};
TodoListItems.propTypes = {
  entries: PropTypes.array,
  deleteItems: PropTypes.func,
  completed: PropTypes.func
};

TodoListItems.defaultProps = {
  entries: [],
  deleteItems: () => {},
  completed: () => {}
};

export default TodoListItems;

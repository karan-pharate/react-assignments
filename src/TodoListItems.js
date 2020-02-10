import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./App.css";
import "./TodoListItems.css";

const TodoListItems = props => {
  useEffect(() => {}, [props.entries]);
  return (
    <div>
      <ul className="theList">
        {props.entries.map((item, key) => {
          const bgcolor = {
            background: `${item.background}`
          };
          return (
            <li className="task" key={key} style={bgcolor}>
              <input
                className="checkbox"
                onChange={() => props.completed(key)}
                type="checkbox"
              />
              <p className={`textContent ${item.done === true && "done"}`}>
                {item.text}
              </p>
              <button
                className="delete-btn"
                onClick={() => props.deleteItems(key)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
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

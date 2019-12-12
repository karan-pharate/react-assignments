import React, { Component } from "react";
import "./App.css";
import "./TodoListItems.css";

class TodoListItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(item) {
    let classname = item.done === true ? "textContent done" : "textContent";
    console.log(item.done);
    return (
      <li className="task" key={item.key}>
        <input
          className="checkbox"
          onChange={() => this.completed(item.key)}
          type="checkbox"
        ></input>
        <p className={classname}> {item.text}</p>

        <button class="delete-btn" onClick={() => this.delete(item.key)}>
          X
        </button>
      </li>
    );
  }
  delete(key) {
    this.props.delete(key);
  }
  completed(item) {
    this.props.completed(item);
  }
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    return (
      <div>
        <ul className="theList">{listItems}</ul>
      </div>
    );
  }
}

export default TodoListItems;

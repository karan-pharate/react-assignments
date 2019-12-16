import React, { Component } from "react";
import TodoListItems from "./TodoListItems";
import "./Todolist.css";
import SketchExample from "./SketchExample";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      background: "#fff"
    };

    this.addItem = this.addItem.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  }
  addItem = e => {
    e.preventDefault();
    let newItem;
    if (this.inputElement.value !== "") {
      newItem = {
        text: this.inputElement.value,
        key: Date.now(),
        done: false,
        background: this.state.background
      };
    }
    this.setState(prevState => {
      return {
        items: prevState.items.concat(newItem)
      };
    });
    this.inputElement.value = "";
  };
  markCompleted = key => {
    let markedItems = this.state.items.map(function(item) {
      if (key === item.key) {
        item.done = !item.done;
      }
      return item;
    });
    this.setState({
      items: markedItems
    });
  };
  deleteItem = key => {
    let filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems
    });
  };
  handleChangeComplete = color => {
    this.setState({
      background: color.hex
    });
  };
  render() {
    return (
      <div className="todoListMain">
        <h1>To do List</h1>
        <div className="header">
          <form onSubmit={this.addItem}>
            <div className="inputField">
              <input
                ref={a => (this.inputElement = a)}
                placeholder="enter task "
                required
              ></input>
              <div className="picker-button inputField">
                <SketchExample
                  background={this.state.background}
                  changeComplete={this.handleChangeComplete}
                />
              </div>
            </div>
            <button type="submit" className="add-button">
              +
            </button>
          </form>
        </div>
        <TodoListItems
          entries={this.state.items}
          completed={this.markCompleted}
          deleteItems={this.deleteItem}
        />
      </div>
    );
  }
}
export default TodoList;

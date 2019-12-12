import React, { Component } from "react";
import TodoListItems from "./TodoListItems";
import "./Todolist.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e) {
    if (this.inputElement.value !== "") {
      var newItem = {
        text: this.inputElement.value,
        key: Date.now(),
        done: false
      };
    }
    this.setState(prevState => {
      return {
        items: prevState.items.concat(newItem)
      };
    });
    this.inputElement.value = "";
    console.log(this.state.items);
    e.preventDefault();
  }
  markCompleted(key) {
    console.log(this.state.items);
    console.log("item" + key);
    let markedItems = this.state.items.map(function(item) {
      if (key === item.key) {
        item.done = !item.done;
      }
      console.log(item);
      return item;
    });
    this.setState({
      items: markedItems
    });
  }
  deleteItem(key) {
    let filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems
    });
  }
  render() {
    return (
      <div className="todoListMain">
        <h1>To do List</h1>
        <div className="header">
          <form onSubmit={this.addItem}>
            <div className="inputField">
              <input
                ref={a => (this.inputElement = a)}
                placeholder="enter task"
                required
              ></input>
              <button type="submit">+</button>
            </div>
          </form>
        </div>
        <TodoListItems
          entries={this.state.items}
          completed={this.markCompleted}
          delete={this.deleteItem}
        />
      </div>
    );
  }
}
export default TodoList;

import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";

class Page extends Component {
  state = {};
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default Page;

import React from "react";
import InputWithButton from "./components/InputWithButton";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>TODOリスト</h1>
      <InputWithButton />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}

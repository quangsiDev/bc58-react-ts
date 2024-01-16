import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import { I_Todo } from "./interface";

export default function Ex_Todo() {
  const [todos, setTodos] = useState<I_Todo[]>([
    {
      id: 1,
      title: "Làm dự án cuối khoá",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Làm capstone movie",
      isCompleted: false,
    },
  ]);
  const handleDelete = (id: number) => {
    let newTodos = todos.filter((item) => item.id != id);
    setTodos(newTodos);
  };
  const handleChangeChecked = (id: number) => {
    let index = todos.findIndex((item) => item.id == id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };
  const handleCreateTodo = (newTodo: I_Todo) => {
    let newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };
  return (
    <div className="container">
      <Form handleAddTodo={handleCreateTodo} />
      <List
        handleChangeChecked={handleChangeChecked}
        listTodo={todos}
        handleDelete={handleDelete}
      />
    </div>
  );
}

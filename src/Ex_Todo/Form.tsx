import React, { useState } from "react";
import { I_PropsForm, I_Todo } from "./interface";
import { customAlphabet } from "nanoid/non-secure";

export default function Form({ handleAddTodo }: I_PropsForm) {
  const [title, setTitle] = useState<string>("Làm bài tập");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    setTitle(value);
  };
  let handleSubmit = () => {
    const nanoid = customAlphabet("6789", 3);
    let todo: I_Todo = {
      id: Number.parseInt(nanoid()), //nano id
      title: title,
      isCompleted: false,
    };
    handleAddTodo(todo);
  };
  return (
    <div className=" py-5 d-flex">
      <input
        onChange={handleChangeTitle}
        value={title}
        type="text"
        className="form-control"
        placeholder="Write title todo"
      />

      <button onClick={handleSubmit} className="btn btn-danger">
        Add
      </button>
    </div>
  );
}
// git pull

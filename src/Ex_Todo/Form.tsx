import React, { useState } from "react";

export default function Form() {
  const [title, setTitle] = useState<string>("Làm bài tập");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("😀 - e", e);
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

      <button className="btn btn-danger">Add</button>
    </div>
  );
}

import React from "react";
import { I_PropsItem } from "./interface";

export default function Item({ todo, handleRemove, handleChangeChecked }: I_PropsItem) {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>
        <input
          onChange={() => {
            handleChangeChecked(todo.id);
          }}
          type="checkbox"
          checked={todo.isCompleted}
          name=""
          id=""
        />
      </td>
      <td>
        <button
          onClick={() => {
            handleRemove(todo.id);
          }}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

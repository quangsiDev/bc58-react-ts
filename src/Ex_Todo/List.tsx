import React from "react";
import { I_PropsList } from "./interface";
import Item from "./Item";

export default function List({ listTodo, handleDelete, handleChangeChecked }: I_PropsList) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Is Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listTodo.map((item, index) => {
            return (
              <Item
                handleChangeChecked={handleChangeChecked}
                handleRemove={handleDelete}
                todo={item}
                key={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

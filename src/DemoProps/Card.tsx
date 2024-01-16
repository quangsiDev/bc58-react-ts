import React from "react";
import { I_PropsCard } from "./interface";

export default function Card({ dataUser }: I_PropsCard) {
  return (
    <div>
      <h2>Name: {dataUser.name}</h2>
      <h2>Age: {dataUser.age}</h2>
    </div>
  );
}

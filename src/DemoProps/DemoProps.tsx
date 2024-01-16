import React from "react";
import Card from "./Card";
import { I_User } from "./interface";

export default function DemoProps() {
  let user: I_User = {
    name: "alice",
    age: 2,
  };
  return (
    <div>
      <Card dataUser={user} />
    </div>
  );
}

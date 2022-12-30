import React from "react";
import Left from "./Left";
import Right from "./Right";
import Center from "./Center";
import "./Deco.css";
function Entire() {
  return (
    <div id="entire">
      <Left />
      <Center />
      <Right />
    </div>
  );
}

export default Entire;

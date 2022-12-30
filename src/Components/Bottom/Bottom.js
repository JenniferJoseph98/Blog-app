import React from "react";
import Blog from "./Blog";
import BottomRight from "./BottomRight";
import "./Blog.css";
function Bottom() {
  return (
    <div id="bottomcont">
      <BottomRight />
      <Blog />
    </div>
  );
}

export default Bottom;

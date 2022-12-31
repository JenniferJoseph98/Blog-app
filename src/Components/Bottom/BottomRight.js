import React from "react";
import Data from "./btnRightContent";
import "./Blog.css";
function BottomRight() {
  const data = Data;

  return (
    <div id="bottomright">
      {data.map((datas, index) => {
        return (
          <a
            target="_blank"
            rel="noreferrer"
            key={index}
            className="btmcont"
            href={datas.url}
          >
            <img className="btmimg" alt="bottom" src={datas.urlToImage} />
            <div className="bottominfocont">
              <span className="bottominfo">{datas.title}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default BottomRight;

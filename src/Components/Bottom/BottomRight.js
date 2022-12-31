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
              <h2 className="bottominfo">{datas.title}</h2>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default BottomRight;

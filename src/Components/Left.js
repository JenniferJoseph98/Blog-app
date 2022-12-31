import React from "react";
import Leftdata from "./leftdata";
function Left() {
  let data = Leftdata;
  return (
    <div id="leftcontainer">
      {data.map((datas, index) => {
        return (
          <a
            key={index}
            href={datas.url}
            rel="noreferrer"
            target="_blank"
            className="leftnews"
          >
            <div className="leftnewsleft">{index}</div>
            <div className="leftnewsright">
              <h6 className="titleh6">{datas.title}</h6>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Left;

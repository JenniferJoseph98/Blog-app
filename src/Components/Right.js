import React from "react";

import RightData from "./rightData";
function Right() {
  const headline = RightData;

  return (
    <div id="rightdiv">
      {headline.map((news, index) => {
        return (
          <a
            key={index}
            href={news.url}
            rel="noreferrer"
            className="rightnews"
            target="_blank"
          >
            <div
              className="rightimage"
              style={{
                backgroundImage: "url(" + news.urlToImage + ")",
                backgroundSize: "190px 110px",
              }}
            ></div>
            <div className="rightinfo">
              <h6 className="righth1">{news.title}</h6>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Right;

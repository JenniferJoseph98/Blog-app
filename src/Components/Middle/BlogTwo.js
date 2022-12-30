
import React from "react";
import Middle from "./middleData";
import "./Middleblog.css";
function BlogTwo() {
  const details = Middle;

  return (
    <div id="fullimage">
      {details.map((detail, index) => {
        return (
          <a
            key={index}
            target="_blank"
            rel="noreferrer"
            href={detail.url}
            className="fullimgcont"
          >
            <h1 className="fulltitle">{detail.title}</h1>
            <img alt="news" className="fullcontimg" src={detail.urlToImage} />
          </a>
        );
      })}
    </div>
  );
}

export default BlogTwo;

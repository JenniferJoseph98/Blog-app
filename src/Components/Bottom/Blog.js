import React from "react";
import BlogData from "./blogdata"
import "./Blog.css";
function Blog() {
  const news = BlogData;
  return (
    <div id="newscontainer">
      {news.map((newsdata,index) => {
        return (
          <a key={index}
            href={newsdata.url}
            rel="noreferrer"
            target="_blank"
            className="newsdata"
          >
            <div className="newsimage">
              <img className="img" src={newsdata.urlToImage} alt="news" />
            </div>
            <div className="newsinfo">
              <span className="date">{newsdata.publishedAt}</span>
              <h5>{newsdata.title}</h5>
              <h6>{newsdata.content}</h6>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Blog;

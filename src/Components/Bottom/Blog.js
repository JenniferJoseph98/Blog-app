import React from "react";
import BlogData from "./blogdata";
import "./Blog.css";
function Blog() {
  const news = BlogData;
  return (
    <div id="newscontainer">
      {news.map((newsdata, index) => {
        return (
          <a
            key={index}
            href={newsdata.url}
            rel="noreferrer"
            target="_blank"
            className="newsdata"
          >
            <div className="newsimage">
              <img className="img" src={newsdata.urlToImage} alt="news" />
            </div>
            <div className="newsinfo">
              <span className="date">
                <i className="publish">Publish Date: </i>
                {newsdata.publishedAt}
              </span>
              <span>{newsdata.title}</span>
              <span>{newsdata.content}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Blog;

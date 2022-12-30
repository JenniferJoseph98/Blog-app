import React from "react";
import "./Deco.css";
function Center() {
  const newspaper = {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "insider@insider.com (Michael Gartenberg)",
    title:
      "Apple needs another hit product. But the rumored new AR/VR glasses will not be it.",
    description:
      "Michael Gartenberg, a former Apple exec and Gartner analyst, doesn't think Apple will succeed with the glasses where others have struggled.",
    url: "https://www.businessinsider.com/apple-new-products-ar-vr-glasses-2022-12",
    urlToImage:
      "https://i.insider.com/63990061f0c5330018dc2b0d?width=1200&format=jpeg",
    publishedAt: "2022-12-27T15:20:46Z",
    content:
      "With the market for smartphones well-saturated, Apple needs to look to new markets for its next big thing.\r\nWhile the iPod led to the iPhone, as I previously wrote, Apple's most recent products, like… [+4652 chars]",
  };
  return (
    <a href={newspaper.url} id="center">
      <img alt="middle" id="centerimg" src={newspaper.urlToImage} />
      <div id="centercontent">
        <h5>{newspaper.title}</h5>
        <h6>{newspaper.description}</h6>
        <i className="author">-  {newspaper.author}</i>
      </div>
    </a>
  );
}

export default Center;

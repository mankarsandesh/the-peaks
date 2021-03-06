import React, { Component } from "react";
import Article from "../components/article/article";
import { Link } from "react-router-dom";
export default class Category extends Component {
  render() {
    const media =
      "https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1";
    const mediaTitle =
      "The wrong criticism of his performance is to say that he has made mistakes";
    const mediaDesc =
      " Confronted with a novel disease for which the country was unprepared, any prime minister would have made errors. The correct criticism is that he has failed to learn from his mistakes and egregiously repeated them";

    return (
      <div className="App-cotainer">
        <div className="container-category">
          <div className="category-header">
            <h1>Search Result </h1>
            <div className="container-header-right">
            <Link to="/allbookmark">
              <button className="bookmark">
                <i className="fa fa-bookmark"></i>View Bookmark
              </button>
            </Link>
            <select className="search">
              <option value="">Select Options</option>
              <option value="">Newest first</option>
              <option value="">Oldest first</option>
              <option value="">Most Popular</option>
            </select>
          </div>
          </div>
          <div className="container-wrapper">
            <div className="col-3">
              <Article
                media={media}
                mediaTitle={mediaTitle}
                mediaDesc={mediaDesc}
              />
            </div>
            <div className="col-3">
              <Article
                media={media}
                mediaTitle={mediaTitle}
                mediaDesc={mediaDesc}
              />
            </div>
            <div className="col-3">
              <Article
                media={media}
                mediaTitle={mediaTitle}
                mediaDesc={mediaDesc}
              />
            </div>
            <div className="col-3">
              <Article
                media={media}
                mediaTitle={mediaTitle}
                mediaDesc={mediaDesc}
              />
            </div>
            <div className="col-3">
              <Article
                media={media}
                mediaTitle={mediaTitle}
                mediaDesc={mediaDesc}
              />
            </div>
            <div className="col-3">
              <Article
                media={media}
                mediaTitle={mediaTitle}
                mediaDesc={mediaDesc}
              />
            </div>
            <div className="col-3">
              <Article
                media={media}
                mediaTitle={mediaTitle}
                mediaDesc={mediaDesc}
              />
            </div>
            <div className="col-3">
              <Article
                media={media}
                mediaTitle={mediaTitle}
                mediaDesc={mediaDesc}
              />
            </div>
            <div className="col-3">
              <Article
                media={media}
                mediaTitle={mediaTitle}
                mediaDesc={mediaDesc}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Article from "../components/article/article";

import { useParams } from "react-router-dom";
class Category extends Component {
  constructor() {
    super();
    this.state = {
      booksmarkNews: [],
    };
  }

  // Compent Mount
  componentDidMount() {
    var myBookmark = JSON.parse(localStorage.getItem("myBookmark") || "[]");
    this.setState({
      booksmarkNews: myBookmark,
    });
  }

  render() {
    const { booksmarkNews } = this.state;

    return (
      <div className="App-cotainer">
        <div className="container-category">
          <div className="category-header">
            <h1>All Bookmark </h1>
            <select className="search">
              <option value="">Select Options</option>
              <option value="">Newest first</option>
              <option value="">Oldest first</option>
              <option value="">Most Popular</option>
            </select>
          </div>
          <div className="container-wrapper">
            {booksmarkNews.map((item) => (
              <div className="col-4" key={item.newsID}>
                <Article
                  key={item.newsID}
                  articleURL={item.newsID}
                  mediaTitle={item.headline}
                  media={item.image}
                  articleLimit="200"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Category;

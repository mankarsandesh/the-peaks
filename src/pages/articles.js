import React, { Component } from "react";
import loader from "../assets/loader.gif";

import ReactHtmlParser from "react-html-parser";

class Articles extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      newsData: [],
      isBookmark: false,
    };
  }

  // Category wise Fetch News
  fetchNewsData(newsId) {
    // Set  Init Value
    this.setState({ isLoaded: true, newsData: [] });
    fetch(
      `${process.env.REACT_APP_API_URL_MAIN}${newsId}?&show-fields=all&api-key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: false,
            newsData: result.response.content.fields,
          });
          console.log(result);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  // Compent Mount
  componentDidMount() {
    var newsID = this.props.location.pathname.replace("/article/", "");
    this.fetchNewsData(newsID);
    var myBookmark = JSON.parse(localStorage.getItem("myBookmark") || "[]");
    console.log(this.findArticles(newsID, myBookmark));
    if (this.findArticles(newsID, myBookmark)) {
      this.setState({
        isBookmark: false,
      });
    } else {
      this.setState({
        isBookmark: true,
      });
    }
  }
  // Add Bookmark
  addBookmark(headline, image) {
    const newsID = this.props.location.pathname.replace("/article/", "");
    const newsData = {
      newsID: newsID,
      headline: headline,
      image: image,
    };
    var myBookmark = JSON.parse(localStorage.getItem("myBookmark") || "[]");
    if (!this.findArticles(newsID, myBookmark)) {
      myBookmark.push(newsData);
      localStorage.setItem("myBookmark", JSON.stringify(myBookmark));
      this.setState({
        isBookmark: false,
      });
    }
  }
  // Find Article
  findArticles(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].newsID === obj) {
        return true;
      }
    }
    return false;
  }

  // Remvoe Bookmark
  removeBookmrk() {
    const newsID = this.props.location.pathname.replace("/article/", "");
    const myBookmark = JSON.parse(localStorage.getItem("myBookmark"));
    for (var i = 0; i < myBookmark.length; i++) {
      if (myBookmark[i].newsID === newsID) {
        myBookmark.splice(i, 1);
      }
    }
    this.setState({
      isBookmark: true,
    });
    localStorage.setItem("myBookmark", JSON.stringify(myBookmark));
  }
  render() {
    const { newsData, isLoaded, isBookmark } = this.state;

    return (
      <div className="App-cotainer">
        <div className="container-header">
          {isBookmark ? (
            <button
              className="bookmark"
              onClick={() =>
                this.addBookmark(newsData.headline, newsData.thumbnail)
              }
            >
              <i className="fa fa-bookmark"></i>Add Bookmark
            </button>
          ) : (
            <button className="bookmark" onClick={() => this.removeBookmrk()}>
              <i className="fa fa-bookmark"></i>Remove Bookmark
            </button>
          )}
        </div>

        {isLoaded ? (
          <span className="loading">
            <img src={loader} alt="Loader" />
          </span>
        ) : (
          <div className="container-aricle">
            <div className=" col-6 col-mobile-12">
              <p className="article-date">{newsData.firstPublicationDate}</p>
              <h1> {newsData.headline} </h1>
              <h3> {newsData.byline} </h3>
              <hr />
              <div className="article-description">
                {ReactHtmlParser(newsData.body)}
              </div>
            </div>
            <div className="col-6 col-mobile-12">
              <div className="article-right">
                <div className="article-img">
                  <img src={newsData.thumbnail} alt="Banner" />
                  <p className="description">{newsData.trailText}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Articles;

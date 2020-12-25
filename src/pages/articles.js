import React, { Component } from "react";
import { Link } from "react-router-dom";
import loader from "../assets/loader.gif";

import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

class Articles extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      newsData: [],
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
    const newsID = this.props.location.pathname.replace("/article", "");
    this.fetchNewsData(newsID);
  }

  render() {
    const { newsData, isLoaded } = this.state;

    return (
      <div className="App-cotainer">
        <div className="container-header">
          <Link to="/allbookmark">
            <button className="bookmark">
              <i className="fa fa-bookmark"></i>Add Bookmark
            </button>
          </Link>
        </div>
        <div className="container-aricle">
          <div className=" col-6 col-mobile-12">
            {isLoaded ? (
              <span className="loading">
                <img src={loader} />
              </span>
            ) : null}

            <p className="article-date">{newsData.firstPublicationDate}</p>
            <h1> {newsData.headline} </h1>
            <h3> {newsData.byline} </h3>
            <hr />
            <div className="article-description">
              <p>{ReactHtmlParser(newsData.body)}</p>
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
      </div>
    );
  }
}

export default Articles;

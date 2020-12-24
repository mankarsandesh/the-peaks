import React, { Component } from "react";
import Article from "../components/article/article";
import "../assets/media.css";
import { Link } from "react-router-dom";
import loader from "../assets/loader.gif";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      isLoadedCategory: false,
      categoryData: [],
      selectType: "newest",
    };
    this.selectNewsType = this.selectNewsType.bind(this);
  }

  componentDidMount() {
    // Fetch Top News
    this.fetchTopNew(this.state.selectType);
    // Fetch Sports Category
    this.fetchSports(this.state.selectType);
  }

  // Fetch Top News
  fetchTopNew = async (type) => {
    // Set Loader Init Value
    this.setState({
      isLoaded: true,
    });

    fetch(
      `${process.env.REACT_APP_API_URL}?order-by=${type}&show-fields=headline,trailText,thumbnail&page-size=9&api-key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: false,
            items: result.response.results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  // Category wise Fetch News SPORTS
  fetchSports = async (type) => {
    // Set Loader Init Value
    this.setState({
      isLoadedCategory: true,
    });

    fetch(
      `${process.env.REACT_APP_API_URL}?section=sport&order-by=${type}&show-fields=headline,trailText,thumbnail&page-size=3&api-key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoadedCategory: false,
            categoryData: result.response.results,
          });
        },
        (error) => {
          this.setState({
            isLoadedCategory: true,
            error,
          });
        }
      );
  };

  // Select Type
  selectNewsType(e) {
    this.setState({ selectType: e.target.value });
    this.fetchTopNew(e.target.value);
    this.fetchSports(e.target.value);
  }

  render() {
    const {
      error,
      isLoaded,
      items,
      categoryData,
      isLoadedCategory,
    } = this.state;

    return (
      <div className="App-cotainer">
        <div className="container-header">
          <h1>Top stories</h1>
          <div className="container-header-right">
            <Link to="/allbookmark">
              <button className="bookmark">
                <i className="fa fa-bookmark"></i>View Bookmark
              </button>
            </Link>
            <select
              className="search"
              value={this.state.selectType}
              onChange={this.selectNewsType}
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="relevance">Most Popular</option>
            </select>
          </div>
        </div>
        <div className="container">
          <div className="container-left">
            {items.slice(0, 1).map((item) => (
              <Article
                key={item.fields.id}
                mediaTitle={item.fields.headline}
                mediaDesc={item.fields.trailText}
                media={item.fields.thumbnail}
              />
            ))}
          </div>
          <div className="container-right">
            {items.slice(1, 3).map((item) => (
              <div className="col-6">
                <Article
                  key={item.fields.id}
                  mediaTitle={item.fields.headline}
                  media={item.fields.thumbnail}
                  height={"300px"}
                />
              </div>
            ))}

            {items.slice(4, 6).map((item) => (
              <div className="col-6">
                <Article
                  key={item.fields.id}
                  mediaTitle={item.fields.headline}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="container-wrapper">
          {isLoaded ? (
            <span className="loading">
              <img src={loader} />
            </span>
          ) : null}

          {items.slice(6, 9).map((item) => (
            <div className="col-4">
              <Article
                key={item.fields.id}
                mediaTitle={item.fields.headline}
                mediaDesc={item.fields.trailText}
                media={item.fields.thumbnail}
              />
              {/* {item.sectionId} */}
            </div>
          ))}
        </div>
        <div className="container-category">
          <div className="category-header">
            <h2>Sports</h2>
            <div className="see-more">
              <a href="#">
                {" "}
                <Link to="/category/sport">See All </Link>
              </a>
            </div>
          </div>
          <div className="container-wrapper">
            {isLoadedCategory ? (
              <span className="loading">
                <img src={loader} />
              </span>
            ) : null}

            {categoryData.map((item) => (
              <div className="col-4">
                <Article
                  key={item.fields.id}
                  mediaTitle={item.fields.headline}
                  mediaDesc={item.fields.trailText}
                  media={item.fields.thumbnail}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

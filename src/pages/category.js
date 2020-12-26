import React, { Component } from "react";
import Article from "../components/article/article";
import loader from "../assets/loader.gif";

class Category extends Component {
  constructor() {
    super();
    this.state = {
      categoryName: "",
      isLoadedCategory: false,
      categoryData: [],
      selectType: "newest",
    };
    this.selectNewsType = this.selectNewsType.bind(this);
  }

  // Category wise Fetch News
  fetchCategorywiseNews(category, type) {
    // Set  Init Value
    this.setState({ isLoadedCategory: true, categoryData: [] });
    fetch(
      `${process.env.REACT_APP_API_URL}?section=${category}&order-by=${type}&show-fields=headline,trailText,thumbnail&page-size=9&api-key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoadedCategory: false,
            categoryData: result.response.results,
          });
          console.log(result);
        },
        (error) => {
          this.setState({
            isLoadedCategory: true,
            error,
          });
        }
      );
  }
  // Compent Mount
  componentDidMount() {
    this.setState({ categoryName: this.props.match.params.name });
    this.fetchCategorywiseNews(
      this.props.match.params.name,
      this.state.selectType
    );
  }

  // When Compoment Update Search Category Wise Data
  componentDidUpdate(prevProps) {
    if (prevProps.match.params !== this.props.match.params) {
      this.fetchCategorywiseNews(
        this.props.match.params.name,
        this.state.selectType
      );
      this.setState({ categoryName: this.props.match.params.name });
    }
  }
  // Select Type
  selectNewsType(e) {
    this.setState({ selectType: e.target.value });
    this.fetchCategorywiseNews(this.props.match.params.name, e.target.value);
  }
  render() {
    const {
      categoryName,
      categoryData,
      isLoadedCategory,
      selectType,
    } = this.state;

    return (
      <div className="App-cotainer">
        <div className="container-category">
          <div className="category-header">
            <h1>{categoryName} </h1>
            <div className="container-header-right">
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
          <div className="container-wrapper">
            {isLoadedCategory ? (
              <span className="loading">
                <img src={loader} alt="Loader"/>
              </span>
            ) : null}

            {categoryData.map((item) => (
              <div className="col-4" key={item.id}>
                <Article
                  key={item.id}
                  articleURL={item.id}
                  mediaTitle={item.fields.headline}
                  media={item.fields.thumbnail}
                  articleLimit="200"
                  type={item.sectionId}
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

import "./article.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class article extends Component {
  constructor() {
    super();
    this.state = {
      articleDefaultLimit: 100,
    };
  }
  render() {
    return (
      <div className="container-wrap">
        <div
          className="contaner-post"
          style={{ minHeight: this.props.height || `100%` }}
        >
          <Link to="/article">
            {this.props.media ? (
              <img src={this.props.media} width="100%" />
            ) : null}
            <div className="post-content">
              <h2>{this.props.mediaTitle.substring(0, this.props.articleLimit ? this.props.articleLimit : this.state.articleDefaultLimit )}</h2>
              {this.props.mediaDesc ? (
                <p>{this.props.mediaDesc.substring(0, 100)}</p>
              ) : null}
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

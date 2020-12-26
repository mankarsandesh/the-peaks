import "./article.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
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
          className={`contaner-post ${this.props.type ? 'categopry-'+this.props.type : 'broder' }`}
          style={{ minHeight: this.props.height || `100%` }}
        >
          
          <Link to={`/article/${this.props.articleURL}`}>
            {this.props.media ? (
              <img src={this.props.media} width="100%" alt="Media" />
            ) : null}
            <div className="post-content">
              <h2>
              {this.props.type}
                {this.props.mediaTitle.substring(
                  0,
                  this.props.articleLimit
                    ? this.props.articleLimit
                    : this.state.articleDefaultLimit
                )}
              </h2>
              {this.props.mediaDesc ? (
                <p>{ReactHtmlParser(this.props.mediaDesc.substring(0, 100))}</p>
              ) : null}
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

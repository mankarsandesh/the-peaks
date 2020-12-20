import "./article.css";
import React, { Component } from "react";
export default class article extends Component {
  render() {
    return (
      <div className="container-wrap">
        <div className="contaner-post">
          {this.props.media ? (
            <img src={this.props.media} width="100%" />
          ) : null}
          <div className="post-content">
            <h2>{this.props.mediaTitle}</h2>
            {this.props.mediaDesc ? <p >{this.props.mediaDesc  }</p> : null}
          </div>
        </div>
      </div>
    );
  }
}

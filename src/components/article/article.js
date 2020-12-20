import "./article.css";
import React, { Component } from "react";
export default class article extends Component {
  render() {
    return (
      <div className="container-wrap">
        <div className="contaner-post">
          <img v-if={this.props.media} src={this.props.media} width="100%" />
          <div className="post-content">
            <h2>{this.props.mediaTitle}</h2>
            <p v-if={this.props.mediaDesc}>{this.props.mediaDesc}</p>
          </div>
        </div>
      </div>
    );
  }
}

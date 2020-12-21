import React, { Component } from "react";
import "./header.css";
import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      showInput: false,
    };
  }

  render() {
    return (
      <div className="App-header">
        <div className="header">
          <Link to="/">
            <img src={logo} className="logo" alt="Logo" />{" "}
          </Link>
          <div className="header-menu">
            <ul className="header-menu-nav">
              <Link to="/">
                <li className="green"> News Today </li>
              </Link>
              <Link to="/category/sports">
                <li className="red">Sports</li>
              </Link>
              <Link to="/category/culture">
                <li className="yellow">Culture</li>
              </Link>
              <Link to="/category/lifestyle">
                <li className="blue">Lifestyle</li>
              </Link>
            </ul>
            <div className="header-search">
              <i
                className="fa fa-search"
                onClick={() => {
                  this.setState({ showInput: !this.state.showInput });
                }}
              ></i>
              {this.state.showInput ? (
                <input placeholder="Search all news" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

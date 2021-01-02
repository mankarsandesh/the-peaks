import React, { Component } from "react";
import "./header.css";

import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      showInput: false,
      showMenu: false,
    };
  }

 

  render() {
    return (
      <div className="App-header">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img src={logo} className="logo" alt="Logo" />{" "}
            </Link>
          </div>

          <div className="header-menu">
            <button
              className="header-menu-drop"
              onClick={() => {
                this.setState({ showMenu: !this.state.showMenu });
              }}
            >
              <i className="fa fa-bars"></i>
            </button>
            {/* For Desktop */}
            <ul className="header-menu-nav">
              <Link to="/">
                <li className="green"> News Today </li>
              </Link>
              <Link to="/category/sport">
                <li className="red">Sports</li>
              </Link>
              <Link to="/category/culture">
                <li className="yellow">Culture</li>
              </Link>
              <Link to="/category/lifeandstyle">
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
                <input
                  placeholder="Search all news"
                 
                />
              ) : null}
            </div>
          </div>
        </div>

        {this.state.showMenu ? (
          <div className="header-menu-mobile">
            <ul className="header-menu-nav-mobile">
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
          </div>
        ) : null}
      </div>
    );
  }
}

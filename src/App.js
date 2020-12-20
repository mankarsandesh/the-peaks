import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../src/components/header/header";
import Footer from "../src/components/footer/footer";
import Home from "../src/pages/home/home";
import Category from "../src/pages/category";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/category">
              <Category />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

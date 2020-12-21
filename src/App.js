import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../src/components/header/header";
import Footer from "../src/components/footer/footer";
import Home from "./pages/home";
import Category from "./pages/category";
import Bookmark from "./pages/bookmark";
import Search from "./pages/search";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category/" component={Category} />
            <Route path="/allbookmark/" component={Bookmark} />
            <Route path="/search/" component={Search} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

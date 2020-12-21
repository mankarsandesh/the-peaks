import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../src/components/header/header";
import Footer from "../src/components/footer/footer";
import Home from "./pages/home";
import Category from "./pages/category";
import Bookmark from "./pages/bookmark";
import Search from "./pages/search";
import Articles from "./pages/articles";
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
            <Route path="/article/" component={Articles} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

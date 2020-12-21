import React, { Component } from "react";
import Article from "../components/article/article";
import { Link } from "react-router-dom";
export default class Articles extends Component {
  render() {
    const media =
      "https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1";
    const mediaTitle =
      "The wrong criticism of his performance is to say that he has made mistakes";
    const mediaDesc =
      " Confronted with a novel disease for which the country was unprepared, any prime minister would have made errors. The correct criticism is that he has failed to learn from his mistakes and egregiously repeated them";

    return (
      <div className="App-cotainer">
        <div className="container-header">
          <Link to="/allbookmark">
            <button className="bookmark">
              <i class="fa fa-bookmark"></i>Add Bookmark
            </button>
          </Link>
        </div>
        <div className="container-aricle">
          <div className="col-6">
            <p className="article-date">FRI 12 JUN 2020 06:40 BST</p>
            <h1>{mediaTitle}</h1>
            <h3>{mediaDesc}</h3>
            <hr />
            <div className="article-description">
              <p>
                Confronted with a novel disease for which the country was
                unprepared, any prime minister would have made errors. The
                correct criticism is that he has failed to learn from his
                mistakes and egregiously repeated themConfronted with a novel
                disease for which the country was unprepared, any prime minister
                would have made errors. The correct criticism is that he has
                failed to learn from his mistakes and egregiously repeated them
              </p>
              <p>
                Confronted with a novel disease for which the country was
                unprepared, any prime minister would have made errors. The
                correct criticism is that he has failed to learn from his
                mistakes and egregiously repeated them
              </p>
              <p>
                Confronted with a novel disease for which the country was
                unprepared, any prime minister would have made errors. The
                correct criticism is that he has failed to learn from his
                mistakes and egregiously repeated them
              </p>
              <p>
                Confronted with a novel disease for which the country Confronted
                with a novel disease for which the country was unprepared, any
                prime minister would have made errors. The correct criticism is
                that he has failed to learn from his mistakes and egregiously
                repeated them
              </p>
              <p>
                Confronted with a novel disease for which the country was
                unprepared, any prime minister would have made errors. The
                correct criticism is that he has failed to learn from his
                mistakes and egregiously repeated them
              </p>
              <p>
                Confronted with a novel disease for which the country was
                unprepared, any prime minister would have made errors. The
                correct criticism is that he has failed to learn from his
                mistakes and egregiously repeated them
              </p>
              <p>
                Confronted with a novel disease for which the country Confronted
                with a novel disease for which the country was unprepared, any
                prime minister would have made errors. The correct criticism is
                that he has failed to learn from his mistakes and egregiously
                repeated them
              </p>
              <p>
                Confronted with a novel disease for which the country was
                unprepared, any prime minister would have made errors. The
                correct criticism is that he has failed to learn from his
                mistakes and egregiously repeated them
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="article-right">
              <div className="article-img">
                <img src={media} alt="Banner" />
                <p className="description">
                  {" "}
                  Confronted with a novel disease for which the country was
                  unprepared, any prime minister would have made errors. The
                  correct criticism is that he has failed to learn from his
                  mistakes and egregiously repeated them
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

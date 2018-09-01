import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GifList from "./components/GifList";
import GifHome from "./components/GifHome";
import NoResult from "./components/NoResult";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="container">
          <Switch>
            <Route exact path="/" component={GifHome} />
            <Route path="/search/:term" component={GifList} />
            <Route component={NoResult} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

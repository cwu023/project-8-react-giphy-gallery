import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Form from "./components/Form";
import GifList from "./components/GifList";
import NoResult from "./components/NoResult";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Form />
          <Switch>
            <Route exact path="/" component={GifList} />
            <Route exact path="/search/:term" component={GifList} />
            <Route component={NoResult} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";

import GifContainer from "./GifContainer";

class GifFetch extends Component {
  state = {
    gifs: [],
    searchTerm: "",
    loading: true
  };

  componentDidMount(props) {
    this.doSearch("happy");
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.term !== nextProps.term) {
      this.doSearch(nextProps.term);
    }
  }

  doSearch = term => {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${term}&limit=24&api_key=dc6zaTOxFJmzC`
      )
      .then(response => {
        this.setState({
          gifs: response.data.data,
          searchTerm: term,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return this.state.loading ? (
      <p>Loading Gifs...</p>
    ) : (
      <GifContainer data={this.state.gifs} term={this.state.searchTerm} />
    );
  }
}

export default GifFetch;

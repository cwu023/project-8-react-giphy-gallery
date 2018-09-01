import React from "react";

import GifFetch from "./GifFetch";
import Navigation from "./Navigation";

const GifHome = (props, { match }) => {
  let term = props.match.params.term;

  return (
    <div>
      <h1>React Giyphy Gallery</h1>
      <p>
        Click the <strong>Search Tab</strong> to begin searching for gifs.
      </p>
      <p>Click other tabs for corresponding search results.</p>
      <Navigation />
      <GifFetch term={term} />
    </div>
  );
};

export default GifHome;

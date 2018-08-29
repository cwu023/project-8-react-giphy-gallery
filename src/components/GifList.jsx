import React from "react";
import GifFetch from "./GifFetch";
import Navigation from "./Navigation";

const GifList = (props, { match }) => {
  let term = props.match.params.term;

  return (
    <div>
      <Navigation />
      <GifFetch term={term} />
    </div>
  );
};

export default GifList;

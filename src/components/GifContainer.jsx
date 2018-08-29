import React from "react";

import NoResult from "./NoResult";
import Gif from "./Gif";

const GifList = props => {
  const results = props.data;
  let gifs;
  if (results.length > 0) {
    gifs = results.map(gif => (
      <Gif url={gif.images.fixed_height.url} key={gif.id} />
    ));
  } else {
    gifs = <NoResult />;
  }

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>{gifs}</ul>
    </div>
  );
};

export default GifList;

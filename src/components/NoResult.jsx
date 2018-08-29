import React from "react";

const NoResult = props => {
  return (
    <li className="not-found">
      <i className="fa fa-frown-o" aria-hidden="true" />
      <h3>No Results Found</h3>
      <p>You search did not return any results. Please try again.</p>
    </li>
  );
};

export default NoResult;

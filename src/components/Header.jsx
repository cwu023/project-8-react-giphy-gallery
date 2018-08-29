import React from "react";
import Form from "./Form";

const Header = props => {
  return (
    <React.Fragment>
      <h1 style={{ marginTop: "0", fontSize: "2.3rem" }}>
        React Giphy Gallery
      </h1>
      <Form onSearching={props.onSearch} />
    </React.Fragment>
  );
};

export default Header;

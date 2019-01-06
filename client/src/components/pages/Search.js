import React, { Component } from "react";
import Form from "../layout/Form";
import Jumbotron from "../layout/Jumbotron";
import Results from "../layout/Results";

class Search extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: ""
  };

  render() {
    return (
        <div>
        <Jumbotron />
        <Form />
        <Results />
        </div>
    );
  }
}

export default Search;

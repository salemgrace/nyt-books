import React, { Component } from "react";

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
            <h2>SAVE BOOK</h2>
        </div>
    );
  }
}

export default Search;
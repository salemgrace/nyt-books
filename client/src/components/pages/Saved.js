import React, { Component } from "react";

class Saved extends Component {
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

export default Saved;
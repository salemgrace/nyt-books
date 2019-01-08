import React, { Component } from "react";
import Jumbotron from "../layout/Jumbotron";
import Results from "../layout/Results";
import Container from "../layout/Container";

class Saved extends Component {
  state = {
    results: []
  };

  render() {
    return (
      <div>
        <Container>
          <Jumbotron />
        <Results results={this.state.results} />
        </Container>
        </div>
    );
  }
}

export default Saved;
import React, { Component } from "react";
import Form from "../layout/Form";
import Jumbotron from "../layout/Jumbotron";
import Results from "../layout/Results";
import Container from "../layout/Container";
import API from "../../utils/API";

class Search extends Component {
  state = {
    search: "",
    results: []
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.search)
      .then(res => {
        this.setState({ results: res.data.message });
      })
};

  render() {
    return (
      <div>
        <Container>
          <Jumbotron />
          <Form 
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Results results={this.state.results} />
        </Container>
        </div>
    );
  }
}

export default Search;

import React from "react";
import "./style.css";

const Form = props => (
    <form className="search">
      <div className="form-group">
        <h4 className="search-title">Type in a Book Name</h4>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="book"
          list="books"
          type="text"
          className="form-control"
          placeholder="Waiting..."
          id="book"
        />
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </form>
  );
  
  export default Form;
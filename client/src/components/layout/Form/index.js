import React from "react";
import "./style.css";

function Form(props) {
  return(
    <form className="search">
      <div className="form-group">
      <label>Let's find some Books to feed our Worms...</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          type="text"
          className="form-control"
          placeholder="Waiting..."
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
)}
  
  export default Form;
import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div>
      <h3>Result renders just below...</h3>
        <ul className="list-group search-results">
          {props.results.map(result => (
            <li key={result} className="list-group-item">
              {result.title}
            </li>
            ))}
        </ul>
    </div>
  );
}

export default SearchResults;

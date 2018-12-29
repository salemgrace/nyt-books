import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import "./App.css";

function App() {
    return (
      <Router>
      <div className="App">
      <div className="App-header">
          <h2>Let's Search for Books!</h2>
        </div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/books" component={Saved} />
      </Switch>
        <p className="App-intro">
          To search do...
        </p>
      </div>
      </Router>
    );
}

export default App;

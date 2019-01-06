import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./components/pages/Saved";
import Search from "./components/pages/Search";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <Wrapper>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Wrapper>
      </div>
      </Router>
    );
}

export default App;

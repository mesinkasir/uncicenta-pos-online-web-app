import React from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import User from "./components/User";
import Cat from "./components/Cat";
import Boom from "./components/Boom";
import Sell from "./components/Sell";
import Buy from "./components/Buy";
import Ups from "./components/Ups";
import Cost from "./components/Cost";
import Slup from "./components/Slup";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Boom />
      <Navbar />
      <div className="App lead">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/user" component={User} />
        <Route path="/report" component={Cost} />
        <Route path="/sale" component={Sell} />
        <Route path="/income" component={Slup} />
        <Route path="/cost" component={Buy} />
        <Route path="/update" component={Ups} />
        <Route path="/group" component={Cat} />
      </div>
      <p className="text-center">
        <small>
          Develope by{" "}
          <a href="https://axcora.com" className="text-info">
            axcora technology
          </a>
        </small>
      </p>
    </Router>
  );
}

export default App;

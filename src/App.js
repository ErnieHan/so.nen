import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/calendar">
        <Layout>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Layout>
      </HashRouter>
    );
  }
}

export default App;

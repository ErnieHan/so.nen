import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Header from "./Components/Header";

class App extends Component {
  render() {
    const Home = <h1>HOME</h1>;
    const About = <h1>About</h1>;
    return (
      <HashRouter>
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

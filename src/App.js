import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Recipe from "./Pages/Recipe";
import Kitchenware from "./Pages/Kitchenware";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer";

export const Whoops404 = () => (
  <div>
    <h1>Opps! We Can't found this pages</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Layout>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/recipe" component={Recipe} />
            <Route path="/kitchenware" component={Kitchenware} />
            <Route path="/shop" component={Shop} />
            <Route component={Whoops404} />
          </Switch>
          <Footer />
        </Layout>
      </HashRouter>
    );
  }
}

export default App;

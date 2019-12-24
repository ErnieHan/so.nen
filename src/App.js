import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout";
// import Header from "./Components/Header";
import Home from "./Pages/Home";
import Recipe from "./Pages/Recipe";
import Kitchenware from "./Pages/Kitchenware";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer/index";
import ProductPage from "./Pages/ProductPage";
import Header from "./Components/Header/index";

export const Whoops404 = () => (
  <div>
    <h1>Opps! We Can't found this pages</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/product/:id">
                <ProductPage />
              </Route>
              <Route path="/recipe" component={Recipe} />
              <Route path="/kitchenware" component={Kitchenware} />
              <Route path="/shop" component={Shop} />
              <Route component={Whoops404} />
            </Switch>
          </Layout>
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;

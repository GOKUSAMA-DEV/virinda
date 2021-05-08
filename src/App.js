import React from "react";
import Header from "./Header";
import { Route, Switch } from "react-router";
import Home from "./Home";
import Recipes from "./Recipes";
import Painting from "./Painting";
import Joker from "./Joker";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/recipes" component={Recipes}></Route>
        <Route exact path="/painting" component={Painting}></Route>
        <Route exact path="/painting/joker" component={Joker}></Route>
      </Switch>
      <Footer/>
    </>
  )
}

export default App;
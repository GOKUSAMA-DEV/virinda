import React, { useState } from "react";
import A from "./Recipes/restaurants.jpg";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import YourMenu from "./YourMenu";
import MainMenu from "./MainMenu";
import Bread from "./Bread";
import Cart from "./Cart";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";


const styles = {
  root: {
      fontSize: 25,
      color: "black",
      marginLeft: 92,
      border: 2,
      borderRadious: 15,
      "&:hover": {
          color: "grey"    
      }
  }
}
const useStyles = makeStyles(styles);

const Recipes = () => {

  const[cart, setCart] = useState([]);

  const addToCart = (val) => {
    console.log(val);
    setCart([...cart , {...val}]);
  }; 

  
const look = useStyles();
  
  return (
    <>
    <div className="recipe_parent">
    <div className="recipe_title">
      <h1>Food Cart</h1>
      <Link to="/recipes/total"><FastfoodIcon className={look.root} />{cart.length}</Link>
      </div>
      <div className="title_image">
        <img src={A} className="restaurant_image" />
      </div>
      <div className="order_box">
        <div className="menu_box">
          <h2>Your Menu</h2>
             {<YourMenu addToCart={addToCart} />}
          <br></br>
          <h2>Maine Course</h2>
             {<MainMenu addToCart={addToCart} />}
          <br></br>
          <h2>Breads</h2>
            {<Bread addToCart={addToCart} />}
          </div>

        <Cart cart={cart}/>
        
       </div>
       </div>
    </>
  )
}

export default Recipes;

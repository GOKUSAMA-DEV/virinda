import React, { useState } from "react";
import A from "./Recipes/restaurants.jpg";
import YourMenu from "./YourMenu";
import MainMenu from "./MainMenu";
import Bread from "./Bread";
import Cart from "./Cart";

const Recipes = () => {

  const[cart, setCart] = useState([]);

  const addToCart = (val) => {
    console.log(val);
    setCart([...cart , {...val}]);
  }; 
  
  return (
    <>
    <div className="recipe_parent">
    <div className="recipe_title">
      <h1>Virinda Resturant</h1>
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

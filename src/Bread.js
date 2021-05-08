import React from "react";
import { RecipeItemBreads } from "./RecipeItem";

export default function Bread({addToCart}) { 
  return ( 
  <>
    {RecipeItemBreads.map((val, inde) => (
      <div className="menu_list">
      <div className="menu_items" key={inde}>
        {val.recipesName}
        <br></br>
        {val.entity}{val.price}
        </div>
      <button className="add" onClick={()=> addToCart(val)}>{val.add}</button>  
      </div>
  
))}
</>
  )
}

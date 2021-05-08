import React from "react";
import { RecipeItem} from "./RecipeItem";


export default function YourMenu({addToCart}) { 
  return ( 
  <>
    {RecipeItem.map((val, ind) => (
      <div className="menu_list">
      <div className="menu_items" key={ind}>
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

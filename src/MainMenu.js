import React from "react";
import { RecipeItemMainCourse} from "./RecipeItem";

export default function MainMenu({addToCart}) { 
  return ( 
  <>
    {RecipeItemMainCourse.map((val, indx) => (
      <div className="menu_list">
      <div className="menu_items" key={indx}>
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

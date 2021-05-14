import React from "react";

export default function Cart({cart}){  
const sum = cart.reduce((a, c) => a + c.price,0);
    return(
       <>
        <div className="checkout_box">
          <h2 className="menu_name">Your Items ({cart.length})</h2>
          <br></br>
          {cart.map((product, ind) => (
          <div className="checkout_items" key={ind}>
            <h4 className="itemname_checkout">
              <span className="ItemsName">{product.recipesName}</span>
            </h4>
            <h4 className="price_checkout">
              <span className="price">{product.entity}{product.price}</span>
               <br></br>
            </h4>
         </div>
          ))}
          <br></br>
          <h2>TOTAL PRICE = <span>&#8377;</span> {cart.entity}{sum}</h2>
          
        </div>        
        </>
    )
}
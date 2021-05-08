import React from "react";
import { Link } from "react-router-dom";

const Card = (props) =>{
    return(
        <>
            <div className="menu-card"> 
            <div className="card-image">
                <img src={props.imgsrc}/>
                </div>  
                <div className="inner-border">
                    {/* <h1 className="card-text">{props.cardText}</h1> */}
                    <Link to={props.path} className="card-text">{props.cardText}</Link>
                </div>
            </div>
        </>
    )
}

export default Card;

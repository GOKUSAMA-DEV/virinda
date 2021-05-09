import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="menu-card">
                <Link to={props.path} className="">
                    <div className="card-image">
                        <img src={props.imgsrc} />
                    </div><div className="card-text">{props.cardText}</div></Link>
            </div>

        </>
    )
}

export default Card;

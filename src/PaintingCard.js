import React from "react";
import { Link } from "react-router-dom";

const PaintingCard = (props) => {
    return (
        <>
            
                <div className="paint-card">
                    <div className="paint_div">
                    <img src={props.imgsrc} />
                    </div>
                    <div className="paint-text">
                    <Link to={props.path}>{props.name}</Link>
                </div>
                </div>
            
        </>
    )
}

export default PaintingCard;

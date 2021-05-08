import React from "react";
import PaintingCard from "./PaintingCard";
import PaintingItems from "./PaintingItems";


const Painting = () => {
    return (
        <div>
            {
                PaintingItems.map((val, ind) => {
                    return <PaintingCard
                    imgsrc={val.imgsrc}
                path={val.path}
                name={val.name}
            />
                })
            }
        </div>
    )
}

export default Painting;

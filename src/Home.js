import React from "react";
import Card from "./Card";
import CardData from "./CardData";


const Home = () => {
    return (
        <>
            {
                CardData.map((val, ind) => {
                    return <Card
                    path={val.path}
                    imgsrc={val.imgsrc}
                cardText={val.cardText}
            />
                })
            }
        </>
    )
}

export default Home;

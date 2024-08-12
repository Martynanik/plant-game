import React, {useState} from "react";

const PlantsShop =({plant, buy}) =>{
    return(
        <div className="d-flex plant-shop-box gap-2" >
            <div className="emoji-size3">{plant.emoji}</div>
            <div className="d-flex flex-column justify-content-start gap-1">
                <div>Price: {plant.price}$</div>
                <div>Grow time: {plant.growTime}s</div>
                <button onClick={()=>buy(plant.price, plant.id)} className="buy-button d-flex align-items-center justify-content-center">Buy</button>
            </div>
        </div>
    )
}

export default PlantsShop
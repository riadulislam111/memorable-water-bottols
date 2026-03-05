import React, { use } from "react";
import Bottle from "../Bollte/Bottle";
import './Bottles.css'

const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise);
    // console.log(bottles);

const handleAddToCart = (bootle) => {
    console.log('bootle will be added to the cart', bootle)
}


    return (
        <div>
<h3>Bottles: {bottles.length}</h3>
<div className="bottles-container">
    {
    bottles.map(bottle => <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>)
}
</div>
        </div>
    );
};

export default Bottles;
import React, { use } from "react";
import Bottle from "../Bollte/Bottle";
import './Bottles.css'

const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise);
    // console.log(bottles);

const handleAddToCart = (bootle) => {
    // console.log('bootle will be added to the cart', bootle)
const newCart =[...cart, bootle];
setCart(newCart);

}


    return ( 
        <div>
<h3>Bottles: {bottles.length}</h3>
<p>Added to cart: {cart.length}</p>
<div className="bottles-container">
    {
    bottles.map(bottle => <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>)
}
</div>
        </div>
    );
};

export default Bottles;
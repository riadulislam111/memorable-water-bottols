import React, { useState } from 'react';
import './bottle.css'


const Bottle = ({bottle, handleAddToCart}) => {
    // console.log(Bottle)
    const [cart, setCart]=useState([])
    const [img, name, price, stock]= bottle;




    return (
        <div className='card bottle'>
            <img src={bottle.img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>{stock}Remaining</p>
            <button onClick={() => handleAddToCart(bottle)}>By Now</button>
        </div>
    );
};

export default Bottle;
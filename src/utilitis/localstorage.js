/**
 * 1. to get something from local storage , you will get it as a string
 * 2. convert this to javascript object/array
 * 
 * 
 */

const getCartFromLocalStorage= () => {
    const storedCartString = localStorage.getItem('cart');

    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storageCart;
    }
    return [];
}

const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addItemToCartLocalStorage = id => {
    const cart = getCartFromLocalStorage();
    // cart.push(id);
    const newCart = [...cart, id];
}

export {getCartFromLocalStorage, addItemToCartLocalStorage};
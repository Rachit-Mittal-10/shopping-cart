import React, { createContext, useState } from 'react';
import {PRODUCTS} from '../product';

// This will provide the everything related to state management

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let i=1;i<=PRODUCTS.length;i++){
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]:prev[itemID]+1}));
    }
    
    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]:prev[itemID]-1}));
    }
    
    const updateQtyInCart = (itemID, newAmount) => {
        setCartItems((prev) => ({...prev, [itemID]: newAmount}));
    }
    
    const getTotalAmountCart = () => {
        let totalAmount = 0;
        for (let item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = PRODUCTS.find((product) => product.productID === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmount;
      };

    const checkout = () => {
        setCartItems(getDefaultCart());
    }

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQtyInCart,
        getTotalAmountCart,
        checkout
    };
    
    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    );
}
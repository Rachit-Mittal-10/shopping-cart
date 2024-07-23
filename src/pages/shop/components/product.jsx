import React from 'react';

export const Product = (props) =>{
    const {productID, productName, price, productImage} = props.data;
    return (
        <div className="product">
            <img src={productImage} alt={productName+"'s Image"}/>
            <div className="product-description">
                <p>{productName}</p>
                <p>Price: {price}</p>
            </div>
        </div>
    );
}
import React, {useContext} from 'react';
import './product.css';
import { ShopContext } from '../../../components/shop-context';

export const Product = (props) =>{
    const {productID, productName, price, productImage} = props.data;
    const {cartItems,addToCart} = useContext(ShopContext);
    let cartItemsAmount = cartItems[productID];
    return (
        <div className="product" key={productID}>
            <img src={productImage} alt={productName+"'s Image"}/>
            <div className="product-description">
                <p>{productName}</p>
                <p>Price: {price}</p>
            </div>
            <button onClick={() => addToCart(productID)}>Add To Cart {cartItemsAmount>0 && ("(" + cartItemsAmount + ")")}</button>
        </div>
    );
}
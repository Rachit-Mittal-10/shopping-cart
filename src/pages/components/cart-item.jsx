import React, {useContext} from "react";
import { ShopContext } from "../../components/shop-context";
import './cart-item.css';

export const CartItem = (props) => {
    const {cartItems, addToCart, removeFromCart, updateQtyInCart} = useContext(ShopContext);
    const {productID, productName, price, productImage} = props.data;
    return (
        <div className='cart-item'>
            <img src={productImage} alt={productName+"'s Image"} />
            <div className="cart-item-description">
                <p>{productName}</p>
                <p>Price: {price}</p>
            </div>
            <div className='button-div'>
                <button onClick={() => removeFromCart(productID)}> - </button>
                <input value={cartItems[productID]} onChange={(e) => updateQtyInCart(productID, Number(e.target.value))}/>
                <button onClick={() => addToCart(productID)}> + </button>
            </div>
        </div>
    );
}
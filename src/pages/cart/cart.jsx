import React, {useContext} from 'react';
import {PRODUCTS} from '../../product';
import {ShopContext} from '../../components/shop-context';
import {CartItem} from '../components/cart-item';
import { useNavigate } from 'react-router-dom';
import './cart.css';

export const Cart = () => {
    const {cartItems,getTotalAmountCart,checkout} = useContext(ShopContext);
    const totalAmount = getTotalAmountCart();
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
    };
    const navigateToHome = () => {
        navigateTo("/");
    }
    return (
        <div className="cart">
            <div className='title'>
                <h1>Your Cart</h1>
            </div>
            <div className="cart-items">{
                PRODUCTS.map((product)=>{
                    if(cartItems[product.productID]>0){
                        return (<CartItem data={product} key={product.productID}/>);
                    }
                    return null;
                })
            }</div>
            <div className="checkout">
                <div>
                    <p>Subtotal: Rs. {totalAmount}</p>
                </div>
                <div className="button-div">
                    <button onClick={navigateToHome}>Continue Shopping</button>
                    <button onClick={checkout}>Checkout</button>
                </div>
            </div>
        </div>
    );
}
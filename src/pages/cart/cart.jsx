import React from 'react';
import {PRODUCTS} from '../../product';
import {Product} from '../components/product';

export const Cart = () => {
    return (
        <div classNaame="cart">
            <div className='titles'>
                <h1>Your Cart</h1>
            </div>
            <div className="cart-items">
                {
                    PRODUCTS.map(()=>{

                    })
                }
            </div>
        </div>
    );
}
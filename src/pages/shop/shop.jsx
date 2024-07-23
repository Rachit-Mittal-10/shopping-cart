import React from 'react';
import {PRODUCTS} from '../../product.js';
import {Product} from './components/product';

export const Shop = () => {
    return (
        <div className="shopPage">
            <div className="title">
                <h1>Shop</h1>
            </div>
            <div className="products">{
                PRODUCTS.map((product)=>{
                    return <Product data={product} />
                })
            }</div>
        </div>
    );
}
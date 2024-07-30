import React from 'react';
import {PRODUCTS} from '../../product.js';
import {Product} from '../components/product';
import './shop.css';

export const Shop = () => {
    return (
        <div className="shopPage">
            <div className="title">
                <h1>Shop</h1>
            </div>
            <div className="products">{
                PRODUCTS.map((product)=>(
                    <Product data={product} key={product.productID}/>
                ))
            }</div>
        </div>
    );
}
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './orders.css'

const Orders = () => {
    const {products, initialCart} = useLoaderData(); //{ products: products, initialCart:initialCart }
    // console.log(products)

    const [cart, setCart]=useState(initialCart);


    const handleRemoveItem =(id) => {
      const remaining = cart.filter(product => product.id !== id);
      removeFromDb(id)
      setCart(remaining)
    } 

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem 
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                        ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
            <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Orders;
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { getCart,clearCart } from '../services/cartService';
import "../styles/user.css"
const Checkout = () => {

  const[cart,setCart]=useState([]);
  const[orderPlaced,setOrederPlaced]=useState(false);

  useEffect(()=>{
    setCart(getCart());
  },[]);

  const total=cart.reduce(
    (sum,item)=>sum+item.price*item.qty,
    0
  );

  const handlePlaceOrder=()=>{
    clearCart();
    setCart([]);
    setOrederPlaced(true);
  };


  return (
    <div>
      <Layout>
        <h2>Checkout</h2>
        {orderPlaced ?(
          <div>
            <h3>Order Placed Successfully!</h3>
            <p>Thank you for shopping with us</p>
          </div>
        ):cart.length === 0?(
          <p>Your cart is empty</p>
        ):(
          <>
            <h3>Order Summary</h3>
            {cart.map((item)=>(
              <div key={item.product_id} className="cart-item">
                <p>
                  {item.name} (x{item.qty})
                </p>
                <p>{item.price * item.qty}</p>
              </div>
            ))}
            <h3>Total : {total}</h3>
            <button onClick={handlePlaceOrder}>
              Place Order
            </button>
          </>
        
        )}
      </Layout>
    </div>
  )
}

export default Checkout

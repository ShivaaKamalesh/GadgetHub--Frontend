import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import "../styles/user.css"
import { Link } from 'react-router-dom';
import{
  getCart,removeFromCart,updateQty,clearCart
} from "../services/cartService";

const Cart = () => {
  const[cart,setCart]=useState([]);

  // to change rapidely
  useEffect(()=>{
    setCart(getCart());
  },[]);

  // to handle quantity
  const handleQty=(id,qty)=>{
    if(qty<1) return;
    updateQty(id,qty);
    setCart(getCart());
  }

  const handleRemove=(id)=>{
    removeFromCart(id);
    setCart(getCart());
  }

  const total=cart.reduce(
    (sum,item)=>sum+item.price*item.qty,
    0
  );

  return (
    <div>
      <Layout>
        <h2>Your Cart</h2>

        {cart.length ===0 ?(
          <p>Your cart is empty</p>
        ):(
          <>
            {cart.map((item)=>(
              <div key={item.product_id} className="cart-item">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>

                <div>
                  <button onClick={()=>handleQty(item.product_id,item.qty-1)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={()=>handleQty(item.product_id,item.qty+1)}>+</button>
                </div>

                <p>{item.price*item.qty}</p>


                <button
                  className='remove-btn'
                  onClick={()=>handleRemove(item.product_id)}
                >Remove</button>
              </div>
            ))}

            <h3>Total: {total} </h3>

            <Link to="/checkout">
              <button>Proceed to Checkout</button>
            </Link>

            <button onClick={()=>{clearCart();setCart([]);}}>Clear Cart</button>
          </>
        )}
        
      </Layout>
    </div>
  );
};

export default Cart

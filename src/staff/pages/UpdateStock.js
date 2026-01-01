import React, { useState } from 'react'
import "../styles/admin.css"
import "../styles/AddProduct.css"
import { updateStock } from "../services/adminApi";

const UpdateStock = () => {
  const[data,setData]=useState({
    productId:"",
    stock:"",
  });

  const[loading,setLoading]=useState(false);
  const[message,setMessage]=useState("");


  const handleChanges=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    });
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    setMessage("");

    if(data.stock<0){
      alert("Stock cannot be negative")
      return;
    }
    setLoading(true);

    try{
      await updateStock(
        Number(data.productId),
        Number(data.stock)
      );

      setMessage("Stock updated");
      setData({
        productId:"",
        stock:""
      });
      
    }catch(err){
      setMessage("Failed to update stock");
    }finally{
      setLoading(false)
    }
  };
  return (
    <div>
      <h2>Update Stock Page</h2>
      <form className='product-form' onSubmit={handleSubmit}>
        <label>ProductId</label>
        <input
          type='number'
          name='productId'
          value={data.productId}
          onChange={handleChanges}
          required
        />

        <label>Stock</label>
        <input
          type='number'
          name='stock'
          value={data.stock}
          onChange={handleChanges}
          required
        />

        <button type='submit' disabled={loading}>
          {loading ? "Updating":"Stock Updated"}
        </button>

        {message && <p>{message}</p>}
      </form>
    </div>
  )
}

export default UpdateStock

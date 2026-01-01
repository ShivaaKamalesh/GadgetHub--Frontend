import React, { use, useState } from 'react'
import "../styles/admin.css"
import "../styles/AddProduct.css"
import { addProduct } from '../services/adminApi'


const AddProduct = () => {
  // product details
  const[product,setProduct]=useState({
    
    name:"",
    category:"",
    price:"",
    stock:"",
  });

  const[loading,setLoading]=useState(false)
  const[message,setMessage]=useState("");


  // to handle changes
  const handleChanges =(e)=>{
    setProduct({
      ...product,
      [e.target.name]:e.target.value
    });
  };
  
  const handleSubmit =async (e)=>{
    e.preventDefault();

    setLoading(true);
    setMessage("");
    
    try{
      await addProduct({
        name:product.name,
        category:product.category,
        price:Number(product.price),
        stock:Number(product.stock),
      });
      setMessage("Product added")

      setProduct({
        name:"",
        category:"",
        price:"",
        stock:"",
      });
    }catch(err){
      setMessage("Failed to add ")
    }finally{
      setLoading(false);
    }
  };
  return (
    <div>
      <h2>Add product page</h2>
      
      <form className='product-form' onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input
          type='text'
          name='name'
          value={product.name}
          onChange={handleChanges}
          required
          />

        <label>Category</label>
        <input
            type='text'
            name='category'
            value={product.category}
            onChange={handleChanges}
            required
        />
        <label>Price</label>
        <input
          type='number'
          name='price'
          value={product.price}
          onChange={handleChanges}
          required
        />
        <label>Stock</label>
        <input
          type='number'
          name='stock'
          value={product.stock}
          onChange={handleChanges}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </button>

        {message && <p>{message}</p>}
      </form>
    </div>
  )
}

export default AddProduct

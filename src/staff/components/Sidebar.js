import React from 'react'
import '../styles/admin.css'
import '../styles/Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h2 className='sidebar-title'>Admin Panel</h2>
      
      <ul className='sidebar-menu'>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
        <li><Link to="/update-stock">Update Stock</Link></li>
        <li><Link to="/low-stock">Low Stock</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar

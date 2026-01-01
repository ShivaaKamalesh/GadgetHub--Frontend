import React from 'react'
import {Routes,Route} from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Product from '../pages/Product';
import AddProduct from '../pages/AddProduct';
import UpdateStock from '../pages/UpdateStock';
import LowStock from '../pages/LowStock';
import Categories from '../pages/Categories';
const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/add-product' element={<AddProduct/>}/>
      <Route path='/update-stock' element={<UpdateStock/>}/>
      <Route path='low-stock' element={<LowStock/>}/>
      <Route path='/categories' element={<Categories/>}/>
    </Routes>
  )
}

export default AdminRoutes

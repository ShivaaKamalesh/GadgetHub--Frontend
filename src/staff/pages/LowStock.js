import React, { useEffect, useState } from "react";
import StockBadge from "../components/StockBadge";
import "../styles/admin.css";
import "../styles/LowStock.css"

import { getLowStockProducts } from "../services/adminApi";

const LowStock = () => {
  
  const[products,setProducts]=useState([]);
  const[threshold,setThreshold]=useState(8);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState("");

  useEffect(()=>{
    fetchLowStock();
  },[threshold]
);

  const fetchLowStock =async()=>{
    try{
      const data=await getLowStockProducts(threshold);
      setProducts(data.products || []);

    }
    catch(err){
      setError("Failed to load the data");
    }
    finally{
      setLoading(false)
    }
  };

  if(loading){
    return <p>Loading low stock product...</p>
  }
  if(error){
    return <p>{error}</p>
  }

  return (
    <div>
      <h2>Low Stock Alerts</h2>

      <label>Threshold:</label>
      <input
        type="number"
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
        style={{ marginLeft: "10px", padding: "5px" }}
      />

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No low stock products 
              </td>
            </tr>
          ) : (
            products.map((p) => (
              <tr key={p.product_id}>
                <td>{p.product_id}</td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>{p.stock}</td>
                <td>
                  <StockBadge stock={p.stock} />
                </td>
              </tr>
          )))
          }
        </tbody>
      </table>
    </div>
  );
};

export default LowStock;

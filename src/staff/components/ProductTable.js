import React from "react";
import "../styles/admin.css";
import "../styles/Product.css";

const ProductTable = ({ products = [] }) => {

  if (!Array.isArray(products)) {
    return <p>Invalid product data</p>;
  }

  return (
    <div>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No products available
              </td>
            </tr>
          ) : (
            products.map((p) => (
              <tr key={p.product_id}>
                <td>{p.product_id}</td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>₹ {p.price}</td>
                <td>{p.stock}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

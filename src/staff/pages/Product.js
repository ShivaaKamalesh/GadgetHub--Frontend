import React, { useEffect, useState } from "react";
import ProductTable from "../components/ProductTable";
import { getAllProducts } from "../services/adminApi";

const Products = () => {
  const [products, setProducts] = useState([]);   // ALWAYS an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();

      // SAFETY — backend always gives data.products
      setProducts(data?.products ?? []);
    } catch (err) {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Products</h2>
      <ProductTable products={products} />
    </div>
  );
};

export default Products;

import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/user.css";
import { getAllProducts ,filterProduct} from "../services/userApi";
import { addToCart } from "../services/cartService";

const Products = () => {

  const[products,setProducts]=useState([]);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState("");

  // filter and search
  const[search,setSearch]=useState("");
  const[category,setCategory]=useState("");
  const[minPrice,setMinPrice]=useState("");
  const[maxPrice,setMaxPrice]=useState("");

  useEffect(()=>{
    loadProduct();
  },[]);

  const loadProduct=async()=>{
    try{
      const data=await getAllProducts();
      setProducts(data.products);
    }
    catch(err){
      setError("Failed to load product")
    }
    finally{
      setLoading(false)
    }
  };

  const applyFilter= async()=>{
    try{
      setLoading(true);

      const data=await filterProduct(
        category || null,
        minPrice || null,
        maxPrice || null
      );

      let filtered=data.products;
      if(search){
        filtered=filtered.filter(p =>
          p.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      setProducts(filtered);
    }catch(err){
      setError("Failed to filter products")
    }
    finally{
      setLoading(false);
    }
  }

  if(loading){
    return <Layout><p>Loding the products ...</p></Layout>
  }
  if(error){
    return <Layout><p>{error}</p></Layout>
  }

  return (
    <Layout>
      <h2>Products</h2>
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search product ..."
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
        />

        <select value={category} onChange={(e)=>setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="mic">Mobile</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <button onClick={applyFilter}>Apply</button>
      </div>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p.product_id} className="product-card">
            <h3>{p.name}</h3>
            <p>Category: {p.category}</p>
            <p>₹{p.price}</p>

            <p className={p.stock <= 10 ? "low" : "ok"}>
              Stock: {p.stock}
            </p>

            <button onClick={()=>addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Products;

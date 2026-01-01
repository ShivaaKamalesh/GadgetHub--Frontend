import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import "../styles/Home.css"

const Home = () => {
  return (
    <Layout>
      <div className="home-hero">

        <div className="home-hero-content">
          <h1>Discover the Latest Tech at GadgetHub</h1>

          <p>
            Stay ahead with the best smartphones, laptops, accessories 
            and more — all in one place. Simple shopping, smooth checkout, 
            and a modern browsing experience.
          </p>

          <Link to="/products">
            <button className="shop-btn">Shop Now</button>
          </Link>
        </div>

      </div>

      <div className="home-features">

        <div className="feature-card">
          <h3>🚀 Fast & Simple</h3>
          <p>Browse products and checkout with ease using our clean interface.</p>
        </div>

        <div className="feature-card">
          <h3>📦 Wide Product Range</h3>
          <p>Explore gadgets across multiple categories and price ranges.</p>
        </div>

        <div className="feature-card">
          <h3>🛡 Secure & Reliable</h3>
          <p>Your shopping experience is smooth, secure and hassle-free.</p>
        </div>

      </div>

    </Layout>
  );
};

export default Home;

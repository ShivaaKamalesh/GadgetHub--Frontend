import React, { useEffect, useState } from "react";
import "../styles/admin.css";
import "../styles/Dashboard.css"
import { getDashboardSummary } from "../services/adminApi";

const Dashboard = () => {
  const [summary, setSummary] = useState({
    total_products: 0,
    low_stock: 0,
    categories: 0
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadSummary();
  }, []);

  const loadSummary = async () => {
    try {
      const data = await getDashboardSummary();
      setSummary(data);
    } catch (err) {
      setError("Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Dashboard</h2>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Products</h3>
          <p>{summary.total_products}</p>
        </div>

        <div className="card">
          <h3>Low Stock Items</h3>
          <p>{summary.low_stock}</p>
        </div>

        <div className="card">
          <h3>Categories</h3>
          <p>{summary.categories}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

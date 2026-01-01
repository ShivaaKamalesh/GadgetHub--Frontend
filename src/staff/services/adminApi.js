const BASE_URL = "http://127.0.0.1:8000";


// ---------- ADD PRODUCT ----------
export const addProduct = async (product) => {
  const response = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!response.ok) throw new Error("Failed to add product");

  return response.json();
};



// ---------- GET ALL PRODUCTS ----------
export const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/products/filter`);

  if (!response.ok) throw new Error("Failed to fetch products");

  return response.json();
};



// ---------- UPDATE STOCK ----------
export const updateStock = async (productId, stock) => {
  const response = await fetch(
    `${BASE_URL}/products/${productId}/stock`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stock }),
    }
  );

  if (!response.ok) throw new Error("Failed to update stock");

  return response.json();
};



// ---------- LOW STOCK ----------
export const getLowStockProducts = async (threshold = 5) => {
  const response = await fetch(
    `${BASE_URL}/products/low-stock?threshold=${threshold}`
  );

  if (!response.ok) throw new Error("Failed to load low stock products");

  return response.json();
};



// ---------- DASHBOARD ----------
export const getDashboardSummary = async () => {
  const response = await fetch(`${BASE_URL}/dashboard/summary`);

  if (!response.ok) throw new Error("Failed to load dashboard");

  return response.json();
};

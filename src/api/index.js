const BASE_URL = `https://fakestoreapi.com`;

export const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error("Network response /GET products not ok");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error /GET products", error);
  }
};

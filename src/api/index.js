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
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const result = await response.json();
    return result.token;
  } catch (error) {
    console.log("There was an error /POST login", error);
    throw error;
  }
};

export const register = async (
  email,
  username,
  password,
  firstname,
  lastname,
  city,
  street,
  number,
  zipcode,
  lat,
  long,
  phone
) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
        name: {
          firstname,
          lastname,
        },
        address: {
          city,
          street,
          number,
          zipcode,
          geolocation: {
            lat,
            long,
          },
        },
        phone,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error /POST register", error);
    throw error;
  }
};

export const fetchSingleProduct = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error to fetch product:", error);
    throw error;
  }
};

export const fetchAllUsers = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    const result = await response.json();
    const userData = result.find((user) => user.username === username);
    return userData;
  } catch (error) {
    console.error(" Error /GET all users", error);
  }
};

export const fetchUserCart = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/carts/${id}`);
    const result = await response.json();
    console.log("result", result);
    return result.products;
  } catch (error) {
    console.error("Error getting user cart /GET", error);
    throw error;
  }
};

export const deleteCartProduct = async (cartId, token) => {
  try {
    const response = await fetch(`${BASE_URL}/carts/${cartId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error deleting product from cart /DELETE", error);
    throw error;
  }
};

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
      body: JSON.stringify({ username, password }),
    });
    const result = await response.json();
    return result;
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

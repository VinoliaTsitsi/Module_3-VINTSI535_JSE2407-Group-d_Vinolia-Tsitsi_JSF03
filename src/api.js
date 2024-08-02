import axios from 'axios'; 

/**
*fetch all products from the Fake Store API
*@returns {Promise<Object[]}

*/
export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

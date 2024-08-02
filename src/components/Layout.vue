<script>
import { fetchProducts } from '../api';

export default {
  data() {
    return {
      products: [],
      loading: true,
      error: null,
    };
  },
  async created() {
    try {
      this.products = await fetchProducts();
    } catch (error) {
      this.error = 'Failed to fetch products.';
    } finally {
      this.loading = false;
    }
  },
};
</script>

<template>
    <div>
      <h1>Product List</h1>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <div v-if="products.length">
        <div v-for="product in products" :key="product.id" class="product">
          <h2>{{ product.title }}</h2>
          <img :src="product.image" :alt="product.title" />
          <p>{{ product.description }}</p>
          <p>Price: ${{ product.price }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .product {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  
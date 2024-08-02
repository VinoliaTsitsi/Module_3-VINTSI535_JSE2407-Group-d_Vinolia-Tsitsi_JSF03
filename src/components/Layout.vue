<template>
    <div>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <div v-if="products.length" class="product-grid">
        <button v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.title" class="product-image"/>
          <h2>{{ product.title }}</h2>
          <p>Price: R{{ product.price }}</p>
          <p>Category: {{ product.category }}</p>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { fetchProducts } from '../api';
  
  const products = ref([]);
  const loading = ref(true);
  const error = ref(null);
  
  onMounted(async () => {
    try {
      products.value = await fetchProducts();
    } catch (err) {
      error.value = 'Failed to fetch products.';
    } finally {
      loading.value = false;
    }
  });
  </script>
  
  <style scoped>
  .product-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    padding: 16px;
  }
  
  .product-card {
  border: 1px solid rgb(206, 181, 148);
  padding: 16px;
  border-radius: 8px;
  background-color: #a373b155;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: block;
  text-align: left;
  width: 100%;
  border: none; /* Remove default button border */
  transition: transform 0.2s, box-shadow 0.2s; /* Smooth transition */
}

.product-card:hover {
background-color:blueviolet;
  transform: scale(1.05); /* Slightly increase size */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Enhance shadow on hover */
}

  
.product-image {
  width: 100%;
  height: 200px; /* Set the desired height */
  object-fit: contain; /* Maintain aspect ratio, cover the entire area */
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: #f0f0f0; 
}

  
  .product-card h2 {
    font-size: 18px;
    margin-bottom: 8px;
  }
  
  .product-card p {
    margin-bottom: 8px;
  }
  </style>
  
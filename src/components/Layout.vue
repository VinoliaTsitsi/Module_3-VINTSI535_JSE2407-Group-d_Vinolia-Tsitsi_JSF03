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

<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="products.length" class="product-grid">
      <router-link
        v-for="product in products"
        :key="product.id"
        :to="`/product/${product.id}`"
        class="product-card"
      >
        <img :src="product.image" :alt="product.title" class="product-image" />
        <h2>{{ product.title }}</h2>
        <p>Price: R{{ product.price }}</p>
        <p>Category: {{ product.category }}</p>
        <div class="rating">
          <span v-for="n in Math.floor(product.rating.rate)" :key="n" class="star">&#9733;</span>
          <span v-for="n in (5 - Math.floor(product.rating.rate))" :key="n + 5" class="star-empty">&#9734;</span>
        </div>
        <button class="add-to-cart">Add to Cart</button>
      </router-link>
    </div>
  </div>
</template>

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
  width: 90%;
  border: none;
  text-decoration: none; /* Remove underlining */
  color: inherit; /* Maintain text color */
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  background-color: blueviolet;
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: #f0f0f0;
}

.product-card h2 {
  font-size: 18px;
  margin-bottom: 8px;
  text-decoration: none; /* Remove underlining */
}

.product-card p {
  margin-bottom: 8px;
  text-decoration: none; /* Remove underlining */
}

.rating {
  display: flex;
  margin-bottom: 8px;
}

.star {
  color: gold;
  margin-right: 2px;
}

.star-empty {
  color: #ccc;
  margin-right: 2px;
}

.add-to-cart {
  display: block;
  width: 80%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.add-to-cart:hover {
  background-color: #45a049;
}
</style>

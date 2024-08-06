<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchProductDetails } from '../api';

const product = ref(null);
const loading = ref(true);
const error = ref(null);
const route = useRoute();
const router = useRouter();

onMounted(async () => {
  try {
    const productId = route.params.id;
    product.value = await fetchProductDetails(productId);
  } catch (err) {
    error.value = 'Failed to fetch product details.';
  } finally {
    loading.value = false;
  }
});

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="product-details-container">
    <button @click="goBack" class="back-button">Back</button>
    <div v-if="product" class="product-details">
      <img :src="product.image" :alt="product.title" class="product-image" />
      <div class="product-info">
        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>
        <p>Price: R{{ product.price }}</p>
        <p>Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
      </div>
    </div>
    <div v-else-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>   
  </div>
</template>

<style scoped>
.product-details-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #a373b155; 
  padding: 16px;
}

.back-button {
  align-self: start;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.back-button:hover {
  background-color: #45a049;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-image {
  max-width: 200px; /* Adjusted size */
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
}

.product-info {
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.product-info h1 {
  font-size: 24px;
  margin: 0;
}

.product-info p {
  margin: 5px 0;
}
</style>

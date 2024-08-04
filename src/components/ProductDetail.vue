<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchProductDetails } from '../api';

const product = ref(null);
const loading = ref(true);
const error = ref(null);
const route = useRoute();

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
</script>

<template>
   <div v-if="product" class="product-details">
    <img :src="product.image" :alt="product.title" class="product-image" />
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    <p>Price: R{{ product.price }}</p>
    <p>Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
  </div>
  <div v-else-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>   
</template>

<style scoped>
.product-details {
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
}

h1 {
  font-size: 24px;
  margin-bottom: 16px;
}

p {
  margin-bottom: 8px;
}
</style>
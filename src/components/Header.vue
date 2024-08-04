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
  <header>
    <div class="logo">My App Logo</div>
    <nav>
      <ul>
        <li>categories</li>
        <li class="search-item">
          <div class="search-container">
            <input type="text" placeholder="Search for products & categories" />
            <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M10 2a8 8 0 015.3 13.7l4 4a1 1 0 01-1.4 1.4l-4-4A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z" />
            </svg>
          </div>
        </li>
        <li>Login</li>
        <li>cart</li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 20px;
}

nav {
  display: flex;
  justify-content: center;
  flex: 1;
}

nav ul {
  display: flex;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  flex: 1;
  justify-content: space-between;
}

.search-item {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  position:static;
}

.search-container input {
  padding: 10px 10px 10px 40px; /* Adjust padding to accommodate the icon */
  border: none;
  border-radius: 5px;
  outline: none;
  text-align: center; /* Center the placeholder text */
}

.search-container {
  position: relative;
  display: flex;
  align-items: center;
}

.search-container input {
  padding: 10px 10px 10px 100px; /* Adjust padding to accommodate the icon */
  border: none;
  border-radius: 5px;
  outline: none;
}

.search-icon {
  position: absolute;
  left: 10px;
  width: 20px; /* Adjust icon size as needed */
  height: 20px;
  fill: #888; /* Icon color */
  pointer-events: none; /* Prevent interaction with the icon */
}
</style>

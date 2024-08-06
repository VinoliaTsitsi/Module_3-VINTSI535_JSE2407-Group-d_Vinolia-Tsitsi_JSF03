<script setup>
import { ref, onMounted } from 'vue';
import { fetchCategories } from '../api';

const categories = ref([]);

onMounted(async () => {
  categories.value = await fetchCategories();
});

const filterByCategory = (category) => {
};

</script>

<template>
  <header>
    <div class="logo">My App Logo</div>
    <nav>
      <ul>
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
  padding: 10px 10px 10px 40px;
  border: none;
  border-radius: 5px;
  outline: none;
  text-align: center;
}

.search-container {
  position: relative;
  display: flex;
  align-items: center;
}

.search-container input {
  padding: 10px 10px 10px 100px;
  border: none;
  border-radius: 5px;
  outline: none;
}

.search-icon {
  position: absolute;
  left: 10px;
  width: 20px;
  height: 20px;
  fill: #888;
  pointer-events: none;
}
</style>

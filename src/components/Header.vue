<template>
    <header>
      <div class="logo">SwiftCart</div>
      <nav>
        <li>categories</li>
        <li>search</li>
        <li>Login</li>
        <li>cart</li>
      </nav>
    </header>
  </template>
  
  <script>
  /**
   * Header Component
   * Displays the header with a logo and navigation links.
   */
  export default {
    name: 'Header'
  }
  </script>
  
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
    gap: 10px;
  }
  
  nav li {
    list-style: none;
  }
  </style>
  
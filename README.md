## Vue.js Product Store Application

## Project Overview

*This Vue.js application serves as a product store where users can browse a grid of product cards, view product details, and interact with filtering and sorting options. The application fetches data from an API and manages state efficiently to ensure a smooth user experience.

## Features

## User Stories and Functionalities

* Grid of Cards: Display products in a grid layout.
* Product Image: Show product images while browsing.
* Product Title: Display the title of each product.
* Product Price: Show the price of each product.
* Product Category: Indicate the category of each product.
* Navigation to Detailed View: Navigate to a detailed view of a product.
* Detailed Product Page: Show title, description, image, price, category, rating, and number of reviews.
* Return to Grid/List Page: Ability to return to the products grid/list from the detailed view.

## Data Fetching and State Management
* Fetch Shop Data: Load all shop data via an API fetch call.
* Fetch Product Data: Load specific product data via an individual product endpoint.
* Loading States: Display loading states while data is being fetched.

## User Interaction
* Filter by Category: Filter products based on categories fetched from the API.
* Sort by Price: Sort products by lowest and highest price.
* Reset Filters and Sorting: Return to default filtering and sorting without refreshing the app.
* Preserve Filters and Sorting: Retain applied filters and sorting after navigating to and from the detailed view.

## Technologies Used
* Vue.js: A progressive JavaScript framework for building user interfaces.
* Vue Router: For handling navigation and routing within the application.
* Vuex: For state management across the application.
* Axios: For making API requests.
* CSS: For styling and layout, with custom styles as needed.

## Setup Instructions
   
   Clone the repository
* git clone https://github.com/yourusername/vue-product-store.git

npm run dev

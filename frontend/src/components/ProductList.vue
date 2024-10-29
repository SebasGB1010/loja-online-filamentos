<!-- frontend/src/components/ProductList.vue -->
<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.name }}</li>
    </ul>
  </div>
</template>

<script>
import api from '../api';

export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    api.get('/products')
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }
};
</script>
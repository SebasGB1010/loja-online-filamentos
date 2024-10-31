<!-- frontend/src/components/ProductList.vue -->
<template>
  <div>
    <h2>Lista de Productos</h2>
    <AddProduct @product-added="fetchProducts" />
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import AddProduct from './AddProduct.vue';

export default {
  components: {
    AddProduct
  },
  data() {
    return {
      products: []
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios.get('http://localhost:3001/api/products')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    }
  }
};
</script>

<style>
/* Estilos opcionales */
</style>
<!-- frontend/src/components/ProductDetail.vue -->
<template>
    <div>
        <h2>Detalles del Producto</h2>
        <div v-if="product">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p>Precio: ${{ product.price }}</p>
            <p>Stock: {{ product.stock }}</p>
        </div>
        </div>
    </template>
    
    <script>
    import axios from 'axios';

    export default {
        data() {
        return {
            product: null
        };
        },
        created() {
        this.fetchProduct();
        },
        methods: {
        fetchProduct() {
            const productId = this.$route.params.id;
            axios.get(`http://localhost:3001/api/products/${productId}`)
            .then(response => {
                this.product = response.data;
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
        }
        }
    };
    </script>
    
    <style>
  /* Estilos opcionales */
    </style>
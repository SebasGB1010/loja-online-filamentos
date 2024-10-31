<!-- frontend/src/components/AddProduct.vue -->
<template>
    <div>
        <h2>Agregar Producto</h2>
        <form @submit.prevent="addProduct">
        <div>
            <label for="name">Nombre:</label>
            <input type="text" v-model="name" required />
        </div>
        <div>
            <label for="description">Descripción:</label>
            <input type="text" v-model="description" required />
        </div>
        <div>
            <label for="price">Precio:</label>
            <input type="number" v-model="price" required />
        </div>
        <div>
            <label for="stock">Stock:</label>
            <input type="number" v-model="stock" required />
        </div>
            <button type="submit">Agregar Producto</button>
        </form>
        </div>
    </template>
    
    <script>
    import axios from 'axios';

    export default {
        data() {
        return {
            name: '',
            description: '',
            price: 0,
            stock: 0
        };
        },
        methods: {
        addProduct() {
            const product = {
            name: this.name,
            description: this.description,
            price: this.price,
            stock: this.stock
            };
            console.log('Sending product:', product);
            axios.post('http://localhost:3001/api/products', product)
            .then(response => {
                console.log('Product added:', response.data)
                this.$emit('product-added', response.data);
                this.name = '';
                this.description = '';
                this.price = 0;
                this.stock = 0;
            })
            .catch(error => {
                console.error('Error adding product:', error);
            });
        }
        }
    };
    </script>
    
    <style>
    /* Estilos opcionales */
    </style>
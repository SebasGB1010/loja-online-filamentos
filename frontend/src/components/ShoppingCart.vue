<!-- frontend/src/components/Cart.vue -->
<template>
    <div>
        <h2>Carrito de Compras</h2>
        <ul>
        <li v-for="item in cart" :key="item.id">
            {{ item.product_name }} - Cantidad: {{ item.quantity }} - Precio: ${{ item.price }}
            <button @click="removeFromCart(item.product_id)">Eliminar</button>
            </li>
        </ul>
        <button @click="checkout">Finalizar Compra</button>
        </div>
    </template>
    
    <script>
    import axios from 'axios';

    export default {
    data() {
        return {
            cart: []
        };
    },
    created() {
        this.fetchCart();
    },
    methods: {
        fetchCart() {
            const userId = 1; // Reemplazar con el ID del usuario autenticado
            axios.get(`http://localhost:3001/api/cart/${userId}`)
            .then(response => {
                this.cart = response.data;
            })
            .catch(error => {
                console.error('Error fetching cart:', error);
            });
        },
        removeFromCart(productId) {
            const userId = 1; // Reemplazar con el ID del usuario autenticado
            axios.delete(`http://localhost:3001/api/cart/${userId}/${productId}`)
            .then(() => {
                this.fetchCart();
            })
            .catch(error => {
                console.error('Error removing from cart:', error);
            });
        },
        checkout() {
            // Implementar la lógica de finalizar compra
            alert('Compra finalizada');
        }
        }
    };
    </script>
    
    <style>
    /* Estilos opcionales */
    </style>
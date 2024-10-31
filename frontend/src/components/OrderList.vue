<!-- frontend/src/components/OrderList.vue -->
<template>
    <div>
        <h2>Lista de Órdenes</h2>
        <ul>
        <li v-for="order in orders" :key="order.id">
            Orden #{{ order.id }} - Total: ${{ order.total }} - Estado: {{ order.status }}
        </li>
        </ul>
        </div>
    </template>
    
    <script>
    import axios from 'axios';

    export default {
        data() {
            return {
                orders: []
            };
        },
        created() {
            this.fetchOrders();
        },
        methods: {
        fetchOrders() {
            const userId = 1; // Reemplazar con el ID del usuario autenticado
            axios.get(`http://localhost:3001/api/orders/user/${userId}`)
            .then(response => {
                this.orders = response.data;
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
            });
        }
        }
    };
    </script>
    
    <style>
    /* Estilos opcionales */
    </style>
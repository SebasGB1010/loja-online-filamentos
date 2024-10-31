<!-- frontend/src/components/UserLogin.vue -->
<template>
    <div>
        <h2>Inicio de Sesión</h2>
        <form @submit.prevent="loginUser">
        <div>
            <label for="email">Email:</label>
            <input type="email" v-model="email" required />
        </div>
        <div>
            <label for="password">Contraseña:</label>
            <input type="password" v-model="password" required />
        </div>
            <button type="submit">Iniciar Sesión</button>
        </form>
        </div>
    </template>
    
    <script>
    import axios from 'axios';

    export default {
        data() {
        return {
            email: '',
            password: ''
        };
        },
        methods: {
        loginUser() {
            const user = {
            email: this.email,
            password: this.password
            };
            axios.post('http://localhost:3001/api/users/login', user)
            .then(response => {
                alert('Inicio de sesión exitoso');
                // Guardar el token en el almacenamiento local o en el estado de la aplicación
                localStorage.setItem('token', response.data.token);
                this.email = '';
                this.password = '';
            })
            .catch(error => {
                console.error('Error logging in:', error);
            });
        }
        }
    };
    </script>
    
    <style>
    /* Estilos opcionales */
    </style>
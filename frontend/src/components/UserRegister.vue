<!-- frontend/src/components/UserRegister.vue -->
<template>
    <div>
        <h2>Registro de Usuario</h2>
        <form @submit.prevent="registerUser">
        <div>
            <label for="username">Nombre de Usuario:</label>
            <input type="text" v-model="username" required />
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" v-model="email" required />
        </div>
        <div>
            <label for="password">Contraseña:</label>
            <input type="password" v-model="password" required />
        </div>
            <button type="submit">Registrar</button>
        </form>
        </div>
    </template>
    
    <script>
    import axios from 'axios';
    
    export default {
        data() {
        return {
            username: '',
            email: '',
            password: ''
        };
        },
        methods: {
        registerUser() {
            const user = {
            username: this.username,
            email: this.email,
            password: this.password
            };
            axios.post('http://localhost:3001/api/users/register', user)
            .then(() => { // Eliminado 'response'
                alert('Usuario registrado exitosamente');
                this.username = '';
                this.email = '';
                this.password = '';
            })
            .catch(error => {
                console.error('Error registering user:', error);
            });
        }
        }
    };
    </script>
    
    <style>
    /* Estilos opcionales */
    </style>
<template>
    <nav>
        <ul>
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/register">Registro</router-link></li>
            <li><router-link to="/login">Iniciar Sesión</router-link></li>
            <li><router-link to="/orders">Órdenes</router-link></li>
            <li><router-link to="/cart">Carrito</router-link></li>
        </ul>
        </nav>
    </template>
    
    <script>
    export default {
        name: 'NavBar'
    };
    </script>
    
    <style>
    nav {
        background-color: #333;
        padding: 1rem;
    }
    nav ul {
        list-style: none;
        display: flex;
        gap: 1rem;
    }
    nav ul li {
        display: inline;
    }
    nav ul li a {
        color: white;
        text-decoration: none;
    }
    nav ul li a:hover {
        text-decoration: underline;
    }
    </style>
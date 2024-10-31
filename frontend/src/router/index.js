// frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../components/ProductList.vue';
import ProductDetail from '../components/ProductDetail.vue';
import UserRegister from '../components/UserRegister.vue';
import UserLogin from '../components/UserLogin.vue';
import OrderList from '../components/OrderList.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

const routes = [
    { path: '/', component: ProductList },
    { path: '/product/:id', component: ProductDetail },
    { path: '/register', component: UserRegister },
    { path: '/login', component: UserLogin },
    { path: '/orders', component: OrderList },
    { path: '/cart', component: ShoppingCart }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
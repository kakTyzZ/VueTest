import "./index.css"
import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import { createPinia } from "pinia";
import App from './App.vue';
import "./api.js";
/* вынести конфиг в отдельный файл */

const app = createApp(App)

const routes = [
    { path: '/', component: () => import('./components/ui/ListItems.vue') },
    { path: '/list', component: () => import('./components/ui/ListItems.vue') },
    { path: '/detailed', component: () => import('./components/ui/DetailedCard.vue') },
    { path: '/login', component: () => import('./components/ui/Login.vue') },
    { path: '/signin', component: () => import('./components/ui/SignIn.vue') },
    { path: '/favourites', component: () => import('./components/ui/Favourites.vue') },
    { path: '/video', component: () => import('./components/ui/VideoPlayer.vue') },
    { path: '/filters', component: () => import('./components/ui/ExtendedFilters.vue') },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router)
app.use(createPinia())

app.mount('#app')




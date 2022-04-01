import { createRouter, createWebHistory } from 'vue-router'
import Main from '../Vue/MainPage.vue';
import NotFound from '../Vue/Page-not-found.vue';
import category from '../Vue/CategoryPage.vue';
import login from '../Vue/LoginPage.vue';
import registerpage from '../Vue/RegisterPage.vue';
import bookseccion from '../Vue/BookSeccion.vue';
import profile from '../Vue/ProfilePage.vue';
import listarLibros from '../components-admin/libro/ListarLibros.vue';
import MainC from '../Vue/MainComponent.vue';
import App from '../../App.vue'

const router = createRouter({
    //history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes:[
        {path: '/:catchAll(.*)',component:NotFound},
        {path: '/',component:MainC,children:[
            {path:'',component:Main}
        ]},
        {path:'/category/:category',component:category},
        {path:'/',component:App,children:[
            {path: '/login',component:login},
            {path:'/register',component:registerpage},
        ]},
        {path: '/book/:book',component:bookseccion},
        {path: '/profile/:id',component:profile},
        {path: '/crud/libros/edit',component:listarLibros},
    ]
})
export default router
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
            {path:'',component:Main,
            beforeEnter(){
                if(!localStorage.getItem('token')){
                    localStorage.setItem('token',"1|l72J1a3CXt7r3TykHerWqdWfvg4vZKZvxRejPHHB")
                    localStorage.setItem('rol','user')
                    return {path: '/login'}
                }
            }},
            {path: 'categoria/:category',component:category},
            {path: 'libro/:book',component:bookseccion},
            {path: 'perfil/:id',component:profile},
            {path: 'crud/libros/edit',component:listarLibros},
        ]},
        //{path:'/categoria/:category',component:category},
        {path:'/',component:App,children:[
            {path: '/login',component:login,name:login},
            {path:'/registro',component:registerpage},
        ]},
    ]
})
export default router
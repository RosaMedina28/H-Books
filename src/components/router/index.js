import { createRouter, createWebHistory } from 'vue-router'
import Main from '../Vue/MainPage.vue';
import NotFound from '../Vue/Page-not-found.vue';
import category from '../Vue/CategoryPage.vue';
import login from '../Vue/LoginPage.vue';
import registerpage from '../Vue/RegisterPage.vue';
import bookseccion from '../Vue/BookSeccion.vue';
import profile from '../Vue/ProfilePage.vue';
//import listarLibros from '../admin/libro/ListarLibros.vue';
import MainC from '../Vue/MainComponent.vue';
import App from '../../App.vue'

import listarlibros from '../admin/Libro/ListarLibros.vue';
import ActualizarLibro from '../admin/Libro/ActualizarLibro.vue';
import InsertarLibro from '../admin/Libro/InsertarLibro.vue';

import ListarCategorias from '../admin/Categorias/ListarCategorias.vue';
import InsertarCategoria from '../admin/Categorias/InsertarCategoria.vue';
import EditarCategoria from '../admin/Categorias/EditarCategoria.vue';

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
            //{path: 'crud/libros/edit',component:listarLibros},
        ]},
        {path: '/new/book',component:InsertarLibro},
        {path: '/show/books',component:listarlibros},
        {path: '/show/category',component:ListarCategorias},
        {path: '/new/category',component:InsertarCategoria},
        {path: '/edit/categoria/:id',component:EditarCategoria, name:'editar_categoria'},
        {path: '/edit/book/:id',component:ActualizarLibro, name:'editar_libro'},

        {path:'/',component:App,children:[
            {path: '/login',component:login,name:login},
            {path:'/registro',component:registerpage},
        ]},
    ]
})
export default router
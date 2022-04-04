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

import VueCookies from 'vue-cookies'

const router = createRouter({
    //history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes: [
        { path: '/:catchAll(.*)', component: NotFound },
        {
            path: '/', component: MainC, children: [
                { path: '', name:'home',component: Main },
                { path: 'categoria/:category', component: category },
                { path: 'libro/:id', component: bookseccion,name: 'libro' },
                { path: 'perfil/:id', component: profile, beforeEnter() {
                    let user  = VueCookies.get('user')
                    if (!user) {
                        return{path:'login'}
                    } else if (user) {
                        return true
                    }
                } },
                //{path: 'crud/libros/edit',component:listarLibros},
            ]
        },
        { path: '/nuevo/libro', component: InsertarLibro },
        { path: '/listar/libros', component: listarlibros },
        { path: '/show/category', component: ListarCategorias },
        { path: '/new/category', component: InsertarCategoria },
        { path: '/edit/categoria/:id', component: EditarCategoria, name: 'editar_categoria' },
        { path: '/editar/libro/:id', component: ActualizarLibro, name: 'editar_libro' },

        {
            path: '/', component: App, children: [
                { path: '/login', component: login, name: login,beforeEnter(){
                    const user = VueCookies.get('user');
                    if(user){
                        return {path: '/'}
                    }else{
                        return true
                    }
                } },
                { path: '/registro', component: registerpage },
            ]
        },
    ]
})
export default router
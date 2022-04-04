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

import ListarCitas from '../admin/Citas/ListarCita.vue';
import ActualizarCitas from '../admin/Citas/ActualizarCita.vue';
import InsertarCitas from '../admin/Citas/InsertarCita.vue';

const router = createRouter({
    //history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: MainC, children: [
                { path: '/:catchAll(.*)', component: NotFound },
                { path: '', name: 'home', component: Main },
                { path: 'categoria/:category', component: category },
                { path: 'libro/:book', component: bookseccion },
                {
                    path: 'perfil/:id', component: profile, beforeEnter() {
                        let user = VueCookies.get('user')
                        if (!user) {
                            return { path: 'login' }
                        } else if (user) {
                            return true
                        }
                    }
                },
                { path: '/new/book', component: InsertarLibro, name:'insertar_libro'},
                { path: '/show/books', component: listarlibros, name: 'listar_libros'},
                { path: '/show/category', component: ListarCategorias, name: 'listar_categorias'},
                { path: '/show/cita', component: ListarCitas, name: 'listar_citas'},
                { path: '/new/category', component: InsertarCategoria, name: 'insertar_categoria'},
                { path: '/new/cita', component: InsertarCitas, name: 'insertar_citas'},
                { path: '/edit/categoria/:id', component: EditarCategoria, name: 'editar_categoria' },
                { path: '/edit/book/:id', component: ActualizarLibro, name: 'editar_libro' },
                { path: '/edit/cita/:id', component: ActualizarCitas, name: 'editar_cita' },
                //{path: 'crud/libros/edit',component:listarLibros},
            ]
        },

        {
            path: '/', component: App, children: [
                {
                    path: '/login', component: login, name: login, beforeEnter() {
                        const user = VueCookies.get('user');
                        if (user) {
                            return { path: '/' }
                        } else {
                            return true
                        }
                    }
                },
                { path: '/registro', component: registerpage,beforeEnter() {
                    const user = VueCookies.get('user');
                    if (user) {
                        return { path: '/' }
                    } else {
                        return true
                    }
                } },
            ]
        },
    ]
})
export default router
<template>
    <div class="container">
        <br>
        <div class="row">
            <div class="offset-lg-9 d-grid  col-lg-3">
                <a href="/nuevo/libro" class="btn btn-brown white" type="button">Agregar libro</a>
            </div>
        </div>
        <div class="row py-4">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Editorial</th>
                        <th>ISBN</th>
                        <th>Paginas</th>
                        <th>Edicion</th>
                        <th>Año de lanzamiento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody v-if="libros.length > 0">
                    <tr v-for="(libro, index) in libros" :key="index">
                            <td>{{ libro.id }}</td>
                            <td>{{ libro.titulo }}</td>
                            <td>{{ libro.autor }}</td>
                            <td>{{ libro.editorial }}</td>
                            <td>{{ libro.isbn }}</td>
                            <td>{{ libro.numero_paginas }}</td>
                            <td>{{ libro.edicion }}</td>
                            <td>{{ libro.año_lanzamiento }}</td>
                            
                        <td>
                            <button type="button" @click="deleteLibro(libro.id)" class="btn btn-danger btn-block">Eliminar</button>
                            
                            <router-link :to='{name:"editar_libro",params:{id:libro.id}}' class="btn btn-warning btn-block" >Editar</router-link>
                            <router-link :to='{name:"libro",params:{id:libro.id}}' class="btn btn-brown white btn-block" >Ver</router-link>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="4" align="center">No hay libros registrados.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    
    data(){
        return {
            libros:[]
        }
    },
    mounted(){
        this.getLibros()
    },
    methods:{
        async getLibros(){
            await axios.get('http://127.0.0.1:8000/api/listar/libros').then(response=>{
                this.libros = response.data.libros
                console.log(response.data.libros)
            }).catch(error=>{
                console.log(error)
                this.libros = []
            })
        },
        deleteLibro(id){
            if(confirm("Estas seguro de eliminar el libro ?")){
                axios.post('http://127.0.0.1:8000/api/eliminar/libro',{
                    libro_id:id
                }).then(response=>{
                    this.getLibros()
                    console.log(response)
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>

<style scoped>
.btn-brown{
    background-color: #320000;
}
.white{
    color:#fff;
}
</style>

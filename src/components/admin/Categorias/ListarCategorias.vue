<template>
    <div class="container">
        <div class="row text-center">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody v-if="categorias.length > 0">
                    <tr v-for="(categoria, index) in categorias" :key="index">
                        <td>{{ categoria.id }}</td>
                        <td>{{ categoria.nombre }}</td>
                        <td>
                            <button type="button" @click="deleteCategoria(categoria.id)" class="btn btn-danger btn-block">Eliminar</button>
                            
                            <router-link :to='{name:"editar_categoria",params:{id:categoria.id}}' class="btn btn-warning btn-block" style="margin-left:20px;">Editar</router-link>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="4" align="center">No hay categorias registradas.</td>
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
            categorias:[]
        }
    },
    mounted(){
        this.getCategorias()
    },
    methods:{
        async getCategorias(){
            await axios.get('http://127.0.0.1:8000/api/listar/categorias').then(response=>{
                this.categorias = response.data.categorias
                console.log(response.data.categorias)
            }).catch(error=>{
                console.log(error)
                this.categorias = []
            })
        },
        deleteCategoria(id){
            if(confirm("Estas seguro de eliminar esta categoria?")){
                axios.post('http://127.0.0.1:8000/api/eliminar/categoria',{
                    categoria_id:id
                }).then(response=>{
                    this.getCategorias()
                    console.log(response)
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>

<template>
        <br>
    <div class="container">
                <div class="row">
            <div class="col text-start">
                <a href="/listar/libros" class="text-start">Volver</a>
            </div>
        </div>
        <div class="row">
            <h2 class="brown">Agregar nuevo libro</h2> <br>
            <h4 class="brown ">{{titulo}}</h4>
        </div>

        <br>
        <div class="row text-start" >
            <div class="col bg-form-1">
                <form class="white" style="margin-top: 30px;margin-bottom: 30px">
                    <div class="mb-3">
                        <label  class="form-label">Titulo</label>
                        <input type="text" class="form-control" v-model="titulo" required>
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Categoria</label>
                        <select class="form-select" v-model="select">
                            <option disabled selected>Seleciona una categoria</option>
                            <option v-for="(categoria) in categorias" :key="categoria" v-bind:value="categoria.id">{{categoria.nombre}}</option>
                            
                        </select>
                    </div>
                    
                    <div class="mb-3">
                        <label  class="form-label">Autor</label>
                        <input type="text" class="form-control" v-model="autor">
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Editoria</label>
                        <input type="text" class="form-control" v-model="editorial">
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">ISBN</label>
                        <input type="text" class="form-control" v-model="isbn">
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Numero de Paginas</label>
                        <input type="text" class="form-control" v-model="paginas">
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Edicion</label>
                        <input type="text" class="form-control" v-model="edicion">
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Año De Lanzamiento</label>
                        <input type="text" class="form-control" v-model="año">
                    </div>
                </form>
            </div>
                <div class="col bg-form-2">
                    <br>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label white">Sinopsis</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="sinopsis"></textarea>
                        </div>
                        
                        <div class="mb-3 white">
                            <label for="formFile" class="form-label">Seleccionar PDF</label>
                            <input class="form-control" type="file" @change="upload()" id="filepdf">
                        </div>   
                        <div class="mb-3 white">
                            <label for="formFile" class="form-label">Seleccionar IMG</label>
                            <input class="form-control" type="file" @change="fileimg">
                        </div>
                        
                        <div class="d-grid gap-2 ">
                            <button type="button" @click="guardarLibro" class="btn white bg-form-1 d-grid gap-2" style="margin-top: 415px;">Guardar Libro</button>
                        </div>
                        <br>
            </div>
        </div>
    </div><br><br>
</template>

<script>
import Swal from 'sweetalert2'
import axios from "axios";
export default {
    name: 'InsertarLibro',
    props: {
        
    },
    data(){
        return {
            categorias:[],
            select:null,
            titulo:"",
            autor:"",
            editorial:"",
            isbn:"",
            paginas:null,
            edicion:"",
            año:"",
            sinopsis:"",
            filepdf:"",
            fileimg:null,
            data:null,
            config:null
            
        }
    },
    mounted(){
        this.getcategorias();
    },
    methods:{
        async getcategorias(){
            await axios.get('http://127.0.0.1:8000/api/listar/categorias')
            .then(response=>{
                this.categorias=response.data.categorias
                console.log(response.data.categorias)
            }).catch(error=>{
                console.log(error)
            
            })
        },
        upload(){
            this.data = new FormData();
            var filepdf = document.querySelector('#filepdf');

            this.data.append('categoria_id', 1);
            this.data.append('titulo', "luna");
            this.data.append('autor',"jaun");
            this.data.append('editorial', "sdsdasd");
            this.data.append('isbn', "532433245");
            this.data.append('numero_paginas', 233);
            this.data.append('edicion', "efef");
            this.data.append('año_lanzamiento', "2002");
            this.data.append('sinopsis', "sdasdasdsa");
            this.data.append('pdf', filepdf.files[0])

            this.config = {
                header : {
                'Content-Type' : 'multipart/form-data'
                }
            }
        },
        async guardarLibro(){
            console.log(this.data)
            await axios.post('http://127.0.0.1:8000/api/libro',this.data,this.config
            ).then(response=>{
                if(response.data.status){
                    Swal.fire(
                        'Se agrego correctamente',
                        '',
                        'success'
                  )
                  this.$router.push('/listar/libros')
                }
            }).catch(error=>{
                console.log(error)
                this.libros = []
            })
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-form-2{
    background-color: #320000;
}
.brown{
    color: #320000;
}
.white{
    color: #ffff;
}
.bg-form-1{
    background-color: #CCAB80;
}
</style>


<template>
    <div><navbarc/></div>
    <br>
    <div class="container">
        <div class="row">
            <h2>{{libro.titulo}}</h2>
        </div><br>
        <div class="row text-start">
            <div class="col-lg-3">
                <img v-bind:src="`/files/img/${libro.imagen}`">
            </div>
            <div class="col-lg-9">
                <div class="row">
                    <b>Sinopsis</b> <br>
                    <p>
                        {{libro.sinopsis}}
                    </p>
                </div>
                <div class="row">
                    <b>Informacion adicional</b> 
                    
                    <div class="col">
                        <p>Autor: {{libro.autor}}</p>
                    </div>
                    <div class="col">
                        <p>ISBN: {{libro.isbn}}</p>
                    </div>
                    <div class="col">
                        <p>Edicion: {{libro.edicion}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p>Editorial: {{libro.editorial}}</p>
                    </div>
                    <div class="col">
                        <p>Numero de Paginas: {{libro.numero_paginas}}</p>
                    </div>
                    <div class="col">
                        <p>Año: {{libro.año_lanzamiento}}</p>
                    </div>
                </div>
            </div>
        </div>

        <br>

        <div class="row">
            <div class="col-lg-3 d-grid gap-2">
                <a v-bind:href="'/files/pdf/'+libro.pdf" type="button" class="btn btn-danger" download>Descargar PDF</a>
            </div>

            <div class="col-lg-3 d-grid gap-2">
                <button type="button" @click="cook()" class="btn btn-outline bg-brown text-white">Guardar Libro</button>
            </div>
        </div>


        <br><br><br>

        <!-- Recomendaiones -->
        <div class="row text-center">
            <h2>Similares</h2>
        </div>
        <div class="row text-center">
            <!-- Carrusel de libros similares -->
        </div>

        <div class="row text-center">
            <h2>Recomendaciones</h2>
        </div>
        <div class="row text-center">
            <!-- Carrusel e libros recomedados -->
        </div>

    </div>
</template>

<script>
import axios from "axios";
export default {
    
    data(){
        return {
            libro:{},
        }
    },
    mounted(){
        if(this.$route.params.id){
            this.getLibro(this.$route.params.id)
        }else{
            //404
        }
        
    },
    methods:{
        cook(){
            this.$cookies.set('name' ,"juanjesus") 
        },
        async getLibro(id){
            await axios.post('http://127.0.0.1:8000/api/filtrar/libro',{
                libro_id:id
            }).then(response=>{
                this.libro = response.data.libro
                console.log(this.libro.imagen)
            }).catch(error=>{
                console.log(error)
                this.libros = {}
            })
        },
        async guardarLibro(id){
            await axios.post('http://127.0.0.1:8000/api/guardar/libro',{
                libro_id:id,
                user_id:id
            }).then(response=>{
                
                console.log(response.data)
            }).catch(error=>{
                console.log(error)
                this.libros = {}
            })
        },
    }
}
</script>

<style scoped>
.bg-brown{
    background-color: #320000;
}
.text-white{
    color: white;
}
</style>

<template>
        <br>
    <div class="container"> <br>
        <div class="row">
            <div class="col text-start">
                <a href="/listar/libros" class="text-start">Volver</a>
            </div>
        </div>
        <div class="row">
            <h2 class="brown">Editar libro</h2> <br>
            <h4 class="brown animate__animated animate__fadeInLeftBig animate__delay-2s">{{libro.titulo}}</h4>
        </div>
        <br>
        <div class="row text-start" >
            <div class="col bg-form-1">
                <form class="white" style="margin-top: 30px;margin-bottom: 30px">
                    <div class="mb-3">
                        <label  class="form-label">Titulo</label>
                        <input type="text" class="form-control" v-model="titulo" :placeholder="libro.titulo">
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Categoria</label>
                        <select class="form-select" v-model="select">
                            <option v-for="(categoria) in categorias" :key="categoria" v-bind:value="categoria.id">{{categoria.nombre}}</option>
                            
                        </select>
                    </div>
                    
                    <div class="mb-3">
                        <label  class="form-label">Autor</label>
                        <input type="text" class="form-control" v-model="autor" :placeholder="libro.autor">
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Editoria</label>
                        <input type="text" class="form-control" v-model="editorial" :placeholder="libro.editorial">
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">ISBN</label>
                        <input type="text" class="form-control" v-model="isbn" :placeholder="libro.isbn">
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Numero de Paginas</label>
                        <input type="text" class="form-control" v-model="paginas" :placeholder="libro.numero_paginas">
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Edicion</label>
                        <input type="text" class="form-control" v-model="edicion" :placeholder="libro.edicion">
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Año De Lanzamiento</label>
                        <input type="text" class="form-control" v-model="año" :placeholder="libro.año_lanzamiento">
                    </div>
                </form>
            </div>
                <div class="col bg-form-2">
                    <br>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label white">Sinopsis</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="sinopsis" :placeholder="libro.sinopsis"></textarea>
                        </div>
                        
                        <div class="mb-3 white">
                            <label for="formFile" class="form-label">Seleccionar PDF</label>
                            <input class="form-control" type="file" @change="filepdf" :placeholder="libro.pdf">
                        </div>   
                        <div class="mb-3 white">
                            <label for="formFile" class="form-label">Seleccionar IMG</label>
                            <input class="form-control" type="file" @change="fileimg" :placeholder="libro.imagen">
                        </div>
                        
                        <div class="d-grid gap-2 ">
                            <button type="button" @click="actualizarLibro" class="btn white bg-form-1 d-grid gap-2 button" style="margin-top: 415px;">Editar Libro</button>
                        </div><br>
            </div>
        </div>
    </div>
    <br><br>
</template>

<script>
import Swal from 'sweetalert2'
import axios from "axios";
export default {
    name: 'EditarLibro',
    props: {
        
    },
    data(){
        return {
            libro:{},
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
            filepdf:null,
            fileimg:null
        }
    },
    mounted(){
        this.getLibro(this.$route.params.id)
        this.getcategorias()
    },
    methods:{
        async getLibro(id){
            await axios.post('http://127.0.0.1:8000/api/filtrar/libro',{
                libro_id:id
            }).then(response=>{
                this.libro = response.data.libro
                console.log(this.libro)
            }).catch(error=>{
                console.log(error)
                Swal.fire(
                        'No se encontro ningun libro',
                        'Vuleva a intentarlo mas tarde',
                        'error'
                )
                
            })
        },
        async getcategorias(){
            await axios.get('http://127.0.0.1:8000/api/listar/categorias')
            .then(response=>{
                this.categorias=response.data.categorias
                console.log(response.data.categorias)
            }).catch(error=>{
                console.log(error)
            
            })
        },
        async actualizarLibro(){
            await axios.post('http://127.0.0.1:8000/api/actualizar/libro',{
                libro_id:this.libro.id,
                categoria_id:this.select,
                titulo:this.titulo,
                autor:this.autor,
                editorial:this.editorial,
                isbn:this.isbn,
                numero_paginas:this.paginas,
                edicion:this.edicion,
                año_lanzamiento:this.año,
                sinopsis:this.sinopsis,
                pdf:this.filepdf,
                imagen:this.fileimg
            },{
                headers:{
                    'Authorization': `Bearer 4|zKNwYLjGGi4GsW8JwcKk4tgiU75Aq9HtY8tlU8aw` 
                },
            }).then(response=>{
                console.log(response.data)
                Swal.fire(
                        'Se edito correctamente',
                        '',
                        'success'
                )
                this.$router.push('/listar/libros')
            }).catch(error=>{
                console.log(error)
                Swal.fire(
                        'Algo salio mal',
                        'Vuelva a intentarlo mas tarde',
                        'error'
                )
            })
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    text-decoration: none;
    color: #320000;
}
a:hover{
    color:#CCAB80;
}
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

.button:hover {background-color: #ac916e}

.button:active {
  background-color: #917b5f;
  box-shadow: 0 5px #666;
  transform: translateY(5px);
}
</style>

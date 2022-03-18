<template>
    <div class="container">
        <div class="row">
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
                    </tr>
                </thead>
                <tbody v-if="libros.length > 0">
                    <tr v-for="(libro,key) in libros" :key="key">
                            <td>{{ libro.id }}</td>
                            <td>{{ libro.titulo }}</td>
                            <td>{{ libro.editorial }}</td>
                            <td>{{ libro.isbn }}</td>
                            <td>{{ libro.paginas }}</td>
                            <td>{{ libro.edicion }}</td>
                            <td>{{ libro.año_lanzamiento }}</td>
                        <td>
                            <router-link :to='{name:"LibroEdit",params:{id:libro.id}}' class="btn btn-success">Edit</router-link>
                            <button type="button" @click="deleteLibro(libro.id)" class="btn btn-danger">Delete</button>
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

export default {
    name:"ListarLibros",
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
            await this.axios.get('http://127.0.0.1:8000/api/listar/libros').then(response=>{
                this.libros = response.libros
                console.log(response)
            }).catch(error=>{
                console.log(error)
                this.libros = []
            })
        },
        deleteLibro(id){
            if(confirm("Estas seguro de eliminar el libro ?")){
                this.axios.post('http://127.0.0.1:8000/api/listar/libros',{
                    libro_id:id
                }).then(response=>{
                    this.getCategories()
                    console.log(response)
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>

<template>
  <div>
      <div v-show="!isLoading" class="m-4">
        <img :src="user.imagen" style="width: 200px" class="m-4"/>
        <h3 class="letter-page fs-4"><b>{{user.nombre}}</b></h3>
        <p class="letter-page fs-5">{{user.descripcion}}</p>
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
         class="btn btn-success">Editar</button>
      </div>
      <div v-show="isLoading" class="spinner-border text-dark" style="width: 3rem; height: 3rem;" role="status">
      </div>
    <div v-show="!isLoading" style="width:100%;">
      <h2 class="letter-page text-start ms-4 fs-3">Contenido guardado:</h2>
      <div
        v-show="!isLoading"
        class="bloque"
        v-if="libros.length > 0"
        style='width: 100%; display: inline-block; margin: 1rem;'
      >
        <div class="m-2 bloque" v-for="(cat, index) in libros" :key="cat">
          <div class="card-book" style="float: left">
            <img
              :src="cat?.imagen"
              class="img-card"
              @click="alertT(cat.titulo)"
            />
            <div class="row align-items-start mt-2">
              <b
                class="letter-page book col-md-9"
                @click="alertT(cat.titulo)"
                >{{ cat.titulo }}</b
              >
                <img
                    @click="deleteBook(cat.id,index)"
                    class="col-md-2"
                    style="width:25%;"
                    src="@/assets/img/icono_dislike.png"/>
            </div>
          </div>
        </div>
      </div>
      <div v-show="!isLoading" v-else>
          <h3 class="title-main m-4">No hay libros guardados</h3>
      </div>
    </div>
  </div>
  <!-- model -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar Perfil</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form method="PUT">
          <!--<input type="file" class="form-control m-2"/>-->
          <input type="text" v-model='user.nombre' class="form-control m-2" placeholder="nombre"/>
          <textarea type="text" v-model='user.descripcion' class="form-control m-2" placeholder="descripcion"/>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" @click="updateDescripcion()">Guardar Cambios</button>
      </div>
    </div>
  </div>
</div>
</template>

<style>
@media (max-width: 500px) {
  .bloque {
    display: none;
  }
  .bloque-xs {
    width: 100%;
    display: inline;
  }
}
@media (min-width: 500px) {
  .bloque-xs-div {
    display: none;
  }
}

.card-book {
  text-align: left;
  width: 200px;
  height: 300px;
  margin-top:0rem;
  margin: 2rem;
}

.img-card {
  image-rendering: optimizeSpeed;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

<script>
import axios from "axios";
import VueCookies from 'vue-cookies';
export default {
  data() {
    return {
      isLoading:false,
      token:VueCookies.get('user').token,
      id:VueCookies.get('user').id,
      libros: [],
      user:{
        imagen:'',
        nombre:'',
        descripcion:'',
      }
    };
  },
  mounted() {
    this.getBooks()
    this.getInfo()
  },
  methods: {
    getBooks() {
      this.isLoading = true
      axios
        .get("http://127.0.0.1:8000/api/listar/favoritos",{
          headers:{
            Authorization: 'Bearer ' + this.token
          }
        })
        .then((response) => {
          this.libros = response.data.libros;
          this.isLoading = false
        })
        .catch((error) => console.log(error),this.isLoading = false);
    },
    updateDescripcion(){
      axios
        .put("http://127.0.0.1:8000/api/put/info",{
          imagen:this.user.imagen,
          nombre:this.user.nombre,
          descripcion: this.user.descripcion
        },{
          headers:{
            Authorization: 'Bearer ' + this.token,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
          }
        })
        .then((response) => {
          alert(response.data.message)
        })
        .catch((error) => console.log(error));
    },
    deleteBook(id,index){
      console.log(id,index)
      this.libros.splice(index,1)
      axios
      .delete('http://127.0.0.1:8000/api/remover/libro',{
          headers: {
            Authorization: 'Bearer ' + this.token,
          },data:{
            libro_id:id
          }
      })
      .then((response)=>console.log(response.data))
      .catch((error)=>console.log(error));
    },
    getInfo(){
      this.isLoading = true
      if(VueCookies.get('user')){
            this.token = VueCookies.get('user').token
            axios
            .get("http://127.0.0.1:8000/api/get/info",
            {
              headers: {
                Authorization: 'Bearer ' + this.token
              }
            })
            .then((response) => {
              this.user.imagen = response.data.imagen
              this.user.nombre = response.data.nombre
              this.user.descripcion = response.data.descripcion
            })
            .catch((error) => console.log(error));
        }
    }
  },
};
</script>
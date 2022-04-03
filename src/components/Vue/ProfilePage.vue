<template>
  <div>
    <img src="@/assets/R.png" style="width: 200px" class="m-4"/>
    <transition>
      <div v-if="!show">
        <h3 class="letter-main"><b>{{nombre}}</b></h3>
        <p class="letter-main">descripcion</p>
        <button class="btn btn-success">Editar</button>
      </div>
      <div>
        <form>
          <input type="text" :value="nombre"/>
        </form>
      </div>
    </transition>
    <div>
      <p class="letter-main text-start ms-4">Contenido guardado:</p>
      <div
        class="bloque"
        v-if="libros.length > 0"
        style="width: 100%; display: flex; margin: 1rem"
      >
        <div class="m-4 bloque" v-for="cat in libros" :key="cat">
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
            </div>
          </div>
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
      nombre:VueCookies.get('user').nombre,
      libros: [],
    };
  },
  mounted() {
    this.getBooks(VueCookies.get('user').id)
  },
  methods: {
    getBooks(id) {
      axios
        .get("http://127.0.0.1:8000/api/listar/favoritos/"+id)
        .then((response) => {
          this.libros = response.data.libros;
          console.log(this.libros);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
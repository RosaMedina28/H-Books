<template>
  <div>
    <h1 class="title-main">{{ category }}</h1>
    <div
      class="bloque"
      v-if="libros.length > 0"
      style="width: 100%; display: flex"
    >
      <div class="m-4 bloque" v-for="cat in libros" :key="cat">
        <div class="card-book" style="float: left">
          <img
            :src="cat?.imagen"
            class="img-card"
            @click="alertT(cat.titulo)"
          />
          <div class="row align-items-start mt-2">
            <b class="letter-page book col-md-9" @click="alertT(cat.titulo)">{{
              cat.titulo
            }}</b>
            <a style="width: 55px">
              <img
                style="width: 100%"
                @click="addBook(cat.id)"
                src="@/assets/img/icono_fav.jpg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="title-main">No se han encontrado libros</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      category: this.$route.params.category,
      libros:[],
    };
  },
  methods: {
    getBooks() {
      axios
        .get("http://127.0.0.1:8000/api/categoria/" + this.category)
        .then((response) => {
          this.libros = response.data.libros;
        })
        .catch((error) => console.log(error));
    },
  },
  mounted(){
      this.getBooks()
  },
};
</script>

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
  width: 250px;
  height: 300px;
  margin: 1rem;
}

.img-card {
  image-rendering: optimizeSpeed;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
</style>
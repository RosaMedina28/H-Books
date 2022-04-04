<template>
  <div class="container">
    <Transition name="bounce">
      <div id="placeholderAlert"></div>
    </Transition>
    <div class="d-flex justify-content-end">
        <router-link class="btn btn-primary my-2" :to='{name:"insertar_categoria"}'>Agregar +</router-link>
    </div>
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
              <button
                type="button"
                @click="deleteCategoria(categoria.id)"
                class="btn btn-danger btn-block"
              >
                Eliminar
              </button>

              <router-link
                :to="{
                  name: 'editar_categoria',
                  params: { id: categoria.id, nombre: categoria.nombre },
                }"
                class="btn btn-warning btn-block"
                style="margin-left: 20px"
                >Editar</router-link
              >
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
  data() {
    return {
      categorias: [],
    };
  },
  mounted() {
    this.getCategorias();
  },
  methods: {
    async getCategorias() {
      await axios
        .get("http://127.0.0.1:8000/api/listar/categorias")
        .then((response) => {
          this.categorias = response.data.categorias;
          console.log(response.data.categorias);
        })
        .catch((error) => {
          console.log(error);
          this.categorias = [];
        });
    },
    deleteCategoria(id) {
      if (confirm("Estas seguro de eliminar esta categoria?")) {
        axios
          .post("http://127.0.0.1:8000/api/eliminar/categoria", {
            categoria_id: id,
          })
          .then(() => {
            this.getCategorias();
            var alertPlaceholder = document.getElementById("placeholderAlert");

            function alert(message, type) {
              var wrapper = document.createElement("div");
              wrapper.innerHTML =
                '<div class="alert alert-' +
                type +
                ' alert-dismissible" role="alert">' +
                message +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

              alertPlaceholder.append(wrapper);
            }
            alert("Categoria Eliminada Correctamente", "danger");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
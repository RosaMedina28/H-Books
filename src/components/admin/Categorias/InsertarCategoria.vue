<template>
  <br />
  <div class="container mb-4">
    <Transition name="bounce">
      <div id="placeholderAlert"></div>
    </Transition>
    <div>
      <h2 class="brown">Añadir Nueva Categoria</h2>
    </div>
    <br />
    <div class="row text-start justify-content-center">
      <div class="col-lg-6 bg-form-2">
        <form
          @submit.prevent="insertarCategoria"
          class="white"
          style="margin-top: 30px; margin-bottom: 30px"
        >
          <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input v-model="nombre" type="text" class="form-control" />
          </div>
          <br />
          <div class="d-grid gap-2">
            <button
              type="submit"
              id="alertbtn"
              class="btn white bg-form-1 d-grid gap-2"
            >
              Guardar Categoria
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueCookies from "vue-cookies";
export default {
  name: "InsertarCategoria",
  data() {
    return {
      success: false,
      nombre: "",
      token: "",
    };
  },
  mounted() {
    if (VueCookies.get("user")) {
      this.token = VueCookies.get("user").token;
    }
  },
  methods: {
    insertarCategoria() {
      axios
        .post(
          "http://localhost:8000/api/categoria",
          {
            nombre: this.nombre,
          },
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        )
        .then(() => {
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
          alert("Categoria Insertada Correctamente", "success");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-form-2 {
  background-color: #320000;
}
.brown {
  color: #320000;
}
.white {
  color: #ffff;
}
.bg-form-1 {
  background-color: #ccab80;
}
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

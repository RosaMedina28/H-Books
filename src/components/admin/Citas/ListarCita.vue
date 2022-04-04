<template>
  <div class="container">
    <Transition name="bounce">
      <div id="placeholderAlert"></div>
    </Transition>
    <div class="d-flex justify-content-end">
        <router-link class="btn btn-primary my-2" :to='{name:"insertar_citas"}'>Agregar +</router-link>
    </div>
    <div class="row text-center">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Cita</th>
            <th>Libro</th>
          </tr>
        </thead>
        <tbody v-if="citas.length > 0">
          <tr v-for="(cita, index) in citas" :key="index">
            <td>{{ cita.id }}</td>
            <td>{{ cita.cita }}</td>
            <td>{{ cita.libro_id}}</td>
            <td>
              <button
                type="button"
                @click="deleteCita(cita.id)"
                class="btn btn-danger btn-block m-auto"
              >
                Eliminar
              </button>

              <router-link
                :to="{
                  name: 'editar_cita',
                  params: { id: cita.id, cita: cita.cita },
                }"
                class="btn btn-warning btn-block m-auto my-2"
                style="margin-left: 20px"
                >Editar</router-link
              >
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="4" align="center">No hay citas registradas.</td>
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
      citas: [],
    };
  },
  mounted() {
    this.getCitas();
  },
  methods: {
    async getCitas() {
      await axios
        .get("http://127.0.0.1:8000/api/listar/citas")
        .then((response) => {
          this.citas = response.data.citas;
          console.log(this.citas.length)
        })
        .catch((error) => {
          console.log(error);
          this.citas = [];
        });
    },
    deleteCita(id) {
      if (confirm("Estas seguro de eliminar esta cita?")) {
        axios
          .post("http://127.0.0.1:8000/api/eliminar/cita", {
            cita_id: id,
          })
          .then(() => {
            this.getCitas();
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
            alert("Cita Eliminada Correctamente", "danger");
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
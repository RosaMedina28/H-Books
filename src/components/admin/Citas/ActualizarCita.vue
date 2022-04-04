<template>
  <br />
  <div class="container mb-4">
    <Transition name="bounce">
      <div id="placeholderAlert"></div>
    </Transition>
    <div>
      <h2 class="brown">Editar Cita</h2>
    </div>
    <br />
    <div class="row text-start justify-content-center">
      <div class="col-lg-6 bg-form-2">
        <form
          @submit.prevent="putCita()"
          method="PUT"
          class="white"
          style="margin-top: 30px; margin-bottom: 30px"
        >
          <div class="mb-3">
            <label class="form-label">Cita</label>
            <textarea
              v-model="cita"
              type="text"
              class="form-control"
              placeholder="Cita"
            />
          </div>
          <br />
          <input class="form-control" placeholder="Buscar Libro" v-model="query" />
          <TransitionGroup
            tag="ul"
            :css="false"
            @before-enter="onBeforeEnter"
            @enter="onEnter"
            @leave="onLeave"
          >
            <!--<li
              v-for="(item, index) in computedList"
              :key="item.msg"
              :data-index="index"
            >
              {{ item.msg }}
            </li>-->
            <select
              class="form-select my-2"
              size="3"
              aria-label="size 3 select example"
              v-model="libro"
            >
              <option
                :value="libro.id"
                v-for="(libro, index) in computedList"
                :key="index"
                :data-index="index"
              >
                {{ libro.titulo }}
              </option>
            </select>
          </TransitionGroup>
          <br />
          <div class="d-grid gap-2">
            <button
              type="submit"
              id="alertbtn"
              class="btn white bg-form-1 d-grid gap-2"
            >
              Editar Cita
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
import gsap from "gsap";

export default {
  name: "EditarLibro",
  data() {
    return {
      edit: false,
      id: 0,
      cita: "",
      libro: 0,
      libros: [],
      token: "",
      query: "",
    };
  },
  computed: {
    computedList() {
      return this.libros.filter((item) => item.titulo.toLowerCase().includes(this.query));
    },
  },
  methods: {
    onBeforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: "1.6em",
        delay: el.dataset.index * 0.15,
        onComplete: done,
      });
    },
    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done,
      });
    },
    putCita() {
      axios
        .put(
          "http://localhost:8000/api/actualizar/cita",
          {
            cita_id: this.id,
            cita: this.cita,
            libro: this.libro,
          },
          {
            headers: {
              Authorization: "Bearer " + this.token,
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET, POST, PATCH, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Headers":
                "Origin, Content-Type, X-Auth-Token",
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
          alert("Cita Editada Correctamente", "primary");
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.id = this.$route.params.id;
    }
    if (this.$route.params.cita) {
      this.cita = this.$route.params.cita;
    }
    if (VueCookies.get("user")) {
      this.token = VueCookies.get("user").token;
    }
    axios
      .get("http://127.0.0.1:8000/api/listar/libros")
      .then((response) => {
        this.libros = response.data.libros;
      })
      .catch((error) => console.log(error));
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

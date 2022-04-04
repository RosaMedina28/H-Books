<template>
  <div class="nav d-flex justify-content-between">
    <button class="letter-page btn btn-link btn-sm" @click.="logout()"><a>Cerrar Sesion</a></button>
    <p class="letter-page m-2">Bienvenido {{nombre}}</p>
  </div>

  <div class="navba">
    <nav class="navbar navbar-expand-lg navbar-">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="../../assets/h.png" style="width: 50px" />
        </a>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <div class="anchura">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder=""
                aria-label=""
              />
              <button class="btn btn-outline-light" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 200px"
          >
            <div class="cate">
              <div class="btn-group text-end">
                <button
                  class="btn btn-light dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  &nbsp; &nbsp; &nbsp; &nbsp; Categorías &nbsp; &nbsp; &nbsp;
                </button>
                <ul class="dropdown-menu">
                  <div v-for="categoria in categorias" :key="categoria">
                    <li>
                      <a
                        class="dropdown-item"
                        v-bind:href="'/categoria/' + categoria.nombre"
                        >{{ categoria.nombre }}</a
                      >
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </ul>
          <div class="btn-group text-end me-4" v-show="rol === 'admin'">
            <button
              class="btn btn-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              &nbsp; &nbsp; &nbsp; &nbsp; Admin &nbsp; &nbsp; &nbsp;
            </button>
            <ul class="dropdown-menu">
              <div>
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="{ name: 'listar_libros' }"
                    >Libros</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="{ name: 'listar_citas' }"
                    >Citas</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="{ name: 'listar_categorias' }"
                    >Categorias</router-link
                  >
                </li>
              </div>
            </ul>
          </div>
          <a :href="/perfil/ + id"
            ><div class="iconos">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg></div
          ></a>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import axios from "axios";
import VueCookies from "vue-cookies";
export default {
  data() {
    return {
      id: 0,
      token:'',
      rol: "user",
      nombre:'',
      categorias: [],
    };
  },
  mounted() {
    this.getcategorias();
    if (VueCookies.get("user")) {
      this.id = VueCookies.get("user").id;
      this.rol = VueCookies.get("user").rol;
      this.token = VueCookies.get("user").token;
      axios
        .get("http://127.0.0.1:8000/api/get/info", {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          this.nombre = response.data.nombre;
        })
        .catch((error) => console.log(error));
    }
  },
  methods: {
    async getcategorias() {
      await axios
        .get("http://127.0.0.1:8000/api/listar/categorias")
        .then((response) => {
          this.categorias = response.data.categorias;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logout(){
      axios
        .post("http://127.0.0.1:8000/api/logout",{},{
          headers: {
            Authorization: 'Bearer ' + this.token
          }
        })
        .then(() => {
          VueCookies.remove('user')
          VueCookies.remove('info')
          window.location.reload()
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navba {
  background-color: #320000;
}

.nav {
  background-color: #ccab80;
  top: 0;
  left: 0;
  height:2.5rem;
}
.iconos {
  color: #ffffff;
}
.anchura {
  width: 720px;
}
.anchurad {
  width: 1020px;
}

.cate {
  position: absolute;
  top: 18px;
  right: 200px;
}
.cate {
  position: absolute;
  top: 18px;
  right: 300px;
}
</style>

<template>
    <div>
        <div>
            <img class="img-fluid img-main" src="../../assets/img/fondo_main.jpg" />
        </div>
        <div>
            <div>
                <!-- mas leidos -->
                <h2 class="title-main mt-4 container-main">Mas leidos</h2>

                <vueper-slides
                    class="bloque no-shadow carousel-class col-md-10"
                    :visible-slides="4"
                    :slide-ratio="1 / 2.7"
                    :dragging-distance="70"
                    :autoplay="true"
                    :duration="3500"
                >
                    <vueper-slide class v-for="libro in libros" :key="libro">
                        <template #content>
                            <div class="card-book col-md-9 col-sm-4 col-xs-2">
                                <img
                                    @click="alertT(libro?.title)"
                                    :src="urlImg + libro?.imagen"
                                    class="img-card"
                                />
                                <div class="row align-items-start mt-2">
                                    <b
                                        @click="alertT(libro?.titulo)"
                                        class="letter-page book col-md-9"
                                    >{{ libro?.titulo }}</b>
                                    <img
                                        @click="addBook(libro.id)"
                                        class="col-md-2"
                                        style="width:25%;"
                                        src="@/assets/img/icono_fav.jpg"
                                    />
                                </div>
                            </div>
                        </template>
                    </vueper-slide>
                </vueper-slides>

                <!-- mas leidos xs -->
                <div class="bloque-xs bloque-xs-div col-md-9 col-sm-4 col-xs-10 m-xs-4">
                    <img
                        @click="alertT(libros[0]?.titulo)"
                        :src="urlImg + libros[0]?.imagen"
                        class="img-card p-4"
                    />
                    <div class="mb-4 mt-2 col-xs-10">
                        <b
                            @click="alertT(libros[0]?.titulo)"
                            class="letter-page col-md-9 p-0 m-xs-0"
                        >
                            {{
                                libros[0]?.titulo
                            }}
                        </b>
                    </div>
                </div>

                <!-- Cita -->
                <div class="cita-div col-12 m-0 row align-item-start">
                    <img :src="urlImg + cita?.imagen" class="img-cita col-md-3 col-xs-10 col-sm-3 p-0" />
                    <div class="col m-auto p-2">
                        <p
                            class="letter-page text-light fs-4 col-md-8 col-sm-9 col-xs-10 m-auto"
                        >“{{ cita?.cita }}”</p>
                        <p
                            class="letter-page text-right text-light fs-4 col-md-8 col-sm-9 col-xs-10 m-auto"
                        >{{ cita?.titulo }}, {{ cita?.autor }}</p>
                    </div>
                </div>

                <!-- mas categorias -->
                <h2 class="title-main mt-4 container-main"
                v-if="categories.length > 0">Recomendaciones</h2>
                <h2 v-else>
                    No hay mas libros
                </h2>
                <div v-for="category in categories" v-bind:key="category">
                    <div class="d-flex flex-row mb-3 ms-4" v-if="category?.libros.length > 0">
                        <div class="p-2 bd-highlight col-mb-5 text-nowrap">
                            <h2 class="title-main mt-4 container-main">{{ category?.categoria }}</h2>
                        </div>
                        <div class="p-2 mt-5">
                            <a href class="text-decoration-none">mas +</a>
                        </div>
                    </div>
                    <!-- menos de 4 libros-->
                    <div class="bloque" v-if="category.libros.length <= 3"
                    style="width:100%;display:flex;">
                        <div class="m-4 bloque" v-for="cat in category.libros" :key="cat">
                            <div class="card-book" style="float:left;">
                                    <img
                                        :src="urlImg + cat?.imagen"
                                        class="img-card"
                                        @click="alertT(cat.titulo)"
                                    />
                                    <div class="row align-items-start mt-2">
                                        <b
                                            class="letter-page book col-md-9"
                                            @click="alertT(cat.titulo)"
                                        >{{ cat.titulo }}</b>
                                        <a style="width:55px;">
                                            <img
                                                style="width:100%;"
                                                @click="addBook(cat.id)"
                                                src="@/assets/img/icono_fav.jpg"
                                            />
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <!-- mas de 4 libros-->
                    <vueper-slides
                    v-if="category.libros.length >= 4"
                        class="bloque no-shadow carousel-class col-md-10"
                        :visible-slides="4"
                        :slide-ratio="1 / 2.7"
                        :dragging-distance="70"
                        :autoplay="((category.libros.length > 4) ? true:false)"
                    >
                        <vueper-slide class v-for="cat in category.libros" :key="cat">
                            <template #content>
                                <div class="card-book">
                                    <img
                                        :src="urlImg + cat?.imagen"
                                        class="img-card"
                                        @click="alertT(cat.titulo)"
                                    />
                                    <div class="row align-items-start mt-2">
                                        <b
                                            class="letter-page book col-md-9"
                                            @click="alertT(cat.titulo)"
                                        >{{ cat.titulo }}</b>
                                        <a style="width:55px;">
                                            <img
                                                style="width:100%;"
                                                @click="addBook(cat.id)"
                                                src="@/assets/img/icono_fav.jpg"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </template>
                        </vueper-slide>
                    </vueper-slides>
                    <!-- mas categorias xs-->
                    <div v-if="category.libros.length > 0"
                    class="bloque-xs bloque-xs-div col-md-9 col-sm-4 col-xs-10 m-xs-4">
                        <img
                            :src="urlImg + category.libros[0]?.imagen"
                            @click="alertT(category.libros[0]?.titulo)"
                            class="img-card p-4"
                        />
                        <div class="mb-4 mt-2 col-xs-10">
                            <b
                                @click="alertT(category.libros[0]?.titulo)"
                                class="letter-page col-md-9 p-0 m-xs-0"
                            >{{ category.libros[0]?.titulo }}</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
    components: { VueperSlides, VueperSlide },
    mounted() {
        this.getBooks()
        this.getRecommendBooks()
        this.getCita()
    },
    methods: {
        getBooks() {
            axios
                .get("http://127.0.0.1:8000/api/listar/libros")
                .then((response) => {
                    this.libros = response.data.libros
                })
                .catch((error) => console.log(error));
        },
        getRecommendBooks(){
            axios
            .get("http://127.0.0.1:8000/api/listar/recomendados")
            .then((response) => {
                this.categories = response.data.categorias
            })
            .catch((error) => console.log(error));
        },
        alertT(title) {
            console.log(title)
        },
        addBook(id) {
            axios
                .post("http://127.0.0.1:8000/api/guardar/libro",
                    {
                        libro_id:id
                    },
                    {
                        headers: {
                            Authorization: 'Bearer ' + this.varToken
                        }
                    })
                .then((response) => { console.log(response.data),
                 alert('libro añadido')})
                .catch((error) => console.log(error));
        },
        getCita(){
            axios
            .get("http://127.0.0.1:8000/api/cita")
            .then((response) =>{ 
                this.cita = response.data.cita
            })
            .catch((error) => console.log(error));
        }
    },
    data() {
        return {
            urlImg:"http://localhost:8000/api/image/",
            varToken: "1|l72J1a3CXt7r3TykHerWqdWfvg4vZKZvxRejPHHB",
            libros: [],
            cita: {},
            categories: [],
        };
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

.img-main {
    overflow: hidden;
    position: relative;
    height: 50%;
    width: 100%;
    image-rendering: optimizeQuality;
}
.img-card {
    image-rendering: optimizeSpeed;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
}

.container-main {
    margin-left: 3%;
    text-align: left;
}
.card-book {
    text-align: left;
    width: 200px;
    height: 300px;
    margin: 0.5rem;
}
.book-card {
    width: 20%;
    height: 20%;
    overflow: hidden;
    position: relative;
}
.carousel-class {
    width: 85%;
    margin: auto;
}
.cita-div {
    background-color: #320000;
}
.img-cita {
    image-rendering: optimizeSpeed;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
}
.img-cita-div {
    width: 18rem;
}
</style>
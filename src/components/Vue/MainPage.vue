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
                    <vueper-slide class v-for="slide in slides" :key="slide">
                        <template #content>
                            <div class="card-book col-md-9 col-sm-4 col-xs-2">
                                <img @click="alertT(slide.title)"
                                :src="slide?.image" class="img-card" />
                                <div class="row align-items-start mt-2">
                                    <b @click="alertT(slide.title)"
                                    class="letter-page book col-md-9">{{ slide.title }}</b>
                                    <img @click="alertT(slide.title)"
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
                    <img @click="alertT(slides[0]?.title)"
                    :src="slides[0]?.image" class="img-card p-4" />
                    <div class="mb-4 mt-2 col-xs-10">
                        <b @click="alertT(slides[0]?.title)"
                        class="letter-page col-md-9 p-0 m-xs-0">
                            {{
                                slides[0]?.title
                            }}
                        </b>
                    </div>
                </div>

                <!-- Cita -->
                <div class="cita-div col-12 m-0 row align-item-start">
                    <img :src="cita?.image" class="img-cita col-md-3 col-xs-10 col-sm-3 p-0" />
                    <div class="col m-auto p-2">
                        <p
                            class="letter-page text-light fs-4 col-md-8 col-sm-9 col-xs-10 m-auto"
                        >{{ cita?.cita }}</p>
                        <p
                            class="letter-page text-right text-light fs-4 col-md-8 col-sm-9 col-xs-10 m-auto"
                        >{{ cita?.titulo }}, {{ cita?.autor }}</p>
                    </div>
                </div>

                <!-- mas categorias -->
                <h2 class="title-main mt-4 container-main">Recomendaciones</h2>
                <div v-for="category in categories" v-bind:key="category">
                    <div class="d-flex flex-row mb-3">
                        <div class="p-2 bd-highlight">
                            <h2 class="title-main mt-4 container-main">{{ category?.category }}</h2>
                        </div>
                        <div class="p-2 mt-5">
                            <a href="" class="text-decoration-none">mas +</a>
                        </div>
                    </div>
                    <vueper-slides
                        class="bloque no-shadow carousel-class col-md-10"
                        :visible-slides="4"
                        :slide-ratio="1 / 2.7"
                        :dragging-distance="70"
                        :autoplay="true"
                        :duration="3500"
                    >
                        <vueper-slide class v-for="cat in category.books" :key="cat">
                            <template #content>
                                <div class="card-book">
                                    <img :src="cat?.image" class="img-card" 
                                    @click="alertT(cat.title)"/>
                                    <div class="row align-items-start mt-2">
                                        <b class="letter-page book col-md-9"
                                        @click="alertT(cat.title)">{{ cat.title }}</b>
                                        <a style="width:55px;">
                                            <img style="width:100%;"
                                            @click="alertT(cat.title)"
                                            src="@/assets/img/icono_fav.jpg"/>
                                        </a>
                                    </div>
                                </div>
                            </template>
                        </vueper-slide>
                    </vueper-slides>
                    <!-- mas categorias xs-->
                    <div class="bloque-xs bloque-xs-div col-md-9 col-sm-4 col-xs-10 m-xs-4">
                        <img :src="category.books[0]?.image" @click="alertT(category.books[0]?.title)" class="img-card p-4" />
                        <div class="mb-4 mt-2 col-xs-10">
                            <b @click="alertT(category.books[0]?.title)"
                            class="letter-page col-md-9 p-0 m-xs-0">
                            {{ category.books[0]?.title }}
                            </b>
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
    },
    methods: {
        getBooks() {
            axios
                .get("http://127.0.0.1:8000/api/listar/libros")
                .then((response) => {this.libros=response.data.libros,
                console.log(this.libros)})
                .catch((error) => console.log(error));
        },
        alertT(title){
            console.log(title)
        }
    },
    data() {
        return {
            libros:[],
            cita: {
                image:'http://localhost:8000/api/image/prueba.jpg',
                cita: "“Los que han muerto y se han convertido en una de esas cosas están en el infierno, sin duda, pero los supervivientes no vivimos mucho más lejos.”",
                titulo: "Apocalipsis Z: El comienzo del fin",
                autor: "Manel Laureiro",
            },
            slides: [
                {
                    title: "Apocalipsis: El comienzo del fin",
                    image: require("@/assets/img/A1vC8D7458L.jpg"),
                },
                {
                    title: "100 años de soledad",
                    image: require("@/assets/img/9788439733836.jpg"),
                },
                {
                    title: "El relato de un naufrago",
                    image: require("@/assets/img/el relato.jpg"),
                },
                {
                    title: "La niebla",
                    image: require("@/assets/img/la-niebla.jpg"),
                },
                {
                    title: "El arte de la guerra",
                    image: require("@/assets/img/el-arte.jpg"),
                },
                {
                    title: "Una vaca se estaciono en mi lugar",
                    image: require("@/assets/img/una-vaca.jpg"),
                },
            ],
            categories: [
                {
                    category: "Romance",
                    books: [
                        {
                            title: "100 años de soledad",
                            image: require("@/assets/img/9788439733836.jpg"),
                        },
                        {
                            title: "El relato de un naufrago",
                            image: require("@/assets/img/el relato.jpg"),
                        },
                        {
                            title: "La niebla",
                            image: require("@/assets/img/la-niebla.jpg"),
                        },
                        {
                            title: "El arte de la guerra",
                            image: require("@/assets/img/el-arte.jpg"),
                        },
                    ],
                },
                {
                    category: "Accion",
                    books: [
                        {
                            title: "100 años de soledad",
                            image: require("@/assets/img/9788439733836.jpg"),
                        },
                        {
                            title: "El relato de un naufrago",
                            image: require("@/assets/img/el relato.jpg"),
                        },
                        {
                            title: "La niebla",
                            image: require("@/assets/img/la-niebla.jpg"),
                        },
                        {
                            title: "El arte de la guerra",
                            image: require("@/assets/img/el-arte.jpg"),
                        },
                    ],
                },
                {
                    category: "Misterio",
                    books: [
                        {
                            title: "100 años de soledad",
                            image: require("@/assets/img/9788439733836.jpg"),
                        },
                        {
                            title: "El relato de un naufrago",
                            image: require("@/assets/img/el relato.jpg"),
                        },
                        {
                            title: "La niebla",
                            image: require("@/assets/img/la-niebla.jpg"),
                        },
                        {
                            title: "El arte de la guerra",
                            image: require("@/assets/img/el-arte.jpg"),
                        },
                    ],
                },
            ],
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
    image-rendering:optimizeSpeed;
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
    image-rendering:optimizeSpeed;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
}
.img-cita-div {
    width: 18rem;
}
</style>
<template>
    <div>
        <div>
            <img class="img-fluid img-main" src="../../assets/img/1.jpg" />
        </div>
        <div>
            <div>
                <h2 class="title-main mt-4 container-main">Mas leidos</h2>
                <p class="bloque">hola</p>
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
                            <div class="card-book">
                                <img
                                    src="@/assets/img/A1vC8D7458L.jpg"
                                    class="col-md-12 col-sm-4"
                                />
                                <div class="row align-items-start mt-2">
                                    <b class="letter-page book col-md-9">{{ slide.title }}</b>
                                    <button class="col-md-2 button-fav">
                                        <b class="fs-5 text-center">+</b>
                                    </button>
                                </div>
                            </div>
                        </template>
                    </vueper-slide>
                </vueper-slides>
                <!--<div class="book-card" v-for="libro in libros" v-bind:key="libro">
                    <div class="">
                        <div class="card" style="width: 18rem;">
                            <img src="@/assets/img/A1vC8D7458L.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{libro}}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
/*export default {
    data() {
        return {
            libros: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    }
}*/


import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'


export default {
    components: { VueperSlides, VueperSlide },
    data() {
        return {
            slides: [
                {
                    title: 'El Teide Volcano, Spain',
                    content: 'Photo by Max Rive',
                    // You can also provide a URL for the image.
                    image: require('@/assets/img/A1vC8D7458L.jpg')
                },
                {
                    title: 'El Teide Volcano, Spain',
                    content: 'Photo by Max Rive',
                    // You can also provide a URL for the image.
                    image: require('@/assets/img/A1vC8D7458L.jpg')
                },
                {
                    title: 'El Teide Volcano, Spain',
                    content: 'Photo by Max Rive',
                    // You can also provide a URL for the image.
                    image: require('@/assets/img/A1vC8D7458L.jpg')
                },
                {
                    title: 'El Teide Volcano, Spain',
                    content: 'Photo by Max Rive',
                    // You can also provide a URL for the image.
                    image: require('@/assets/img/A1vC8D7458L.jpg')
                },
                {
                    title: 'El Teide Volcano, Spain',
                    content: 'Photo by Max Rive',
                    // You can also provide a URL for the image.
                    image: require('@/assets/img/A1vC8D7458L.jpg')
                },
                {
                    title: 'El Teide Volcano, Spain',
                    content: 'Photo by Max Rive',
                    // You can also provide a URL for the image.
                    image: require('@/assets/img/A1vC8D7458L.jpg')
                },
                {
                    title: 'El Teide Volcano, Spain',
                    content: 'Photo by Max Rive',
                    // You can also provide a URL for the image.
                    image: require('@/assets/img/A1vC8D7458L.jpg')
                },
                {
                    title: 'El Teide Volcano, Spain',
                    content: 'Photo by Max Rive',
                    // You can also provide a URL for the image.
                    image: require('@/assets/img/A1vC8D7458L.jpg')
                },
                // Other slides.
            ]
        }
    }
}
</script>

<style>
@media (max-width:400px) {
.bloque {
        color:red;
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

.container-main {
    margin-left: 3%;
    text-align: left;
}
.card-book {
    text-align: left;
    width: 14rem;
    height: 19rem;
    margin: 0.5rem;
}
.image-card-book {
    width: 13rem;
    image-rendering: optimizeSpeed;
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
</style>
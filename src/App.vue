<template>
  <div>
    <div><navbarc/></div>
    <div><router-view></router-view></div>
    <div><footerc/></div>
  </div>
</template>

<script>

//import router from './components/router/index.js'
import navbarc from "./components/Vue/Navbar-component.vue";
//import mainpage from "./components/Vue/MainPage.vue";
import footerc from "./components/Vue/Footer-component.vue";


export default {
  name: "App",
  components: {
    navbarc,
    //mainpage,
    footerc,
  },
  mounted(){
    //router.push('/home')
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
@font-face{
  font-family: "Rochester";
  unicode-range:U+000-5FF;
  src: local('Rochester'), url('@/assets/fonts/Rochester/Rochester-Regular.ttf') format('truetype');
}
@font-face{
  font-family:"Overpass";
  unicode-range: U+000-5FF;
  src: local('Overpass'), url('@/assets/fonts/Overpass/Overpass-VariableFont_wght.ttf') format('truetype');
}

.title-main {
    font-family: "Rochester", Helvetica, Arial, Bold;
    font-size: 48px;
}
.letter-page{
  margin: .25rem;
  font-family: "Overpass";
  font-size: 14px;
}
.button-fav{
  border: 3px solid #320000;
  color: #320000;
}
</style>

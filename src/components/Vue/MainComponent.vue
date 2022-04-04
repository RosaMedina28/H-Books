<template>
  <div>
    <div><navbarc/></div>
    <div><router-view></router-view></div>
    <div><footerc/></div>
  </div>
</template>

<script>
//import router from './components/router/index.js'
import navbarc from "./Navbar-component.vue";
//import mainpage from "./components/Vue/MainPage.vue";
import footerc from "./Footer-component.vue";

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



import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/components/router/index.js'
import "bootstrap";
import 'animate.css';
import VueCookies from 'vue-cookies';
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(router).mount('#app')
App.use(VueCookies);
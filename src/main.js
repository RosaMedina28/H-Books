import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/components/router/index.js'
import "bootstrap";
import 'animate.css';
import "bootstrap/dist/css/bootstrap.min.css";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(router,VueSweetalert2).mount('#app')
//App.use(VueCookies);
//import firebase from 'firebase/compat/app';

// Initialize Firebase
//export const app = initializeApp(firebaseConfig);

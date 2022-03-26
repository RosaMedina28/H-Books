import {createApp} from 'vue';
import mp from '../Vue/MainPage.vue';
import router from '../router/index.js';
createApp(mp).use(router).mount('#main')
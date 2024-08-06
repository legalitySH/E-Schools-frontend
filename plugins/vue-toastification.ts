import Toast from 'vue-toastification';
import { defineNuxtPlugin } from "nuxt/app";
import 'vue-toastification/dist/index.css';


export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Toast, {
        position: 'top-right',
        timeout: 3000,
        closeOnClick: true,
        icon: false,
    })
});

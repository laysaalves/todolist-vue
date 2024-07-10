import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Lara from '@primevue/themes/lara';
import './assets/css/main.css';
import App from './App.vue';

createApp(App)
.use(PrimeVue, {
    theme: {
        preset: Lara
    }
})
.mount('#app');
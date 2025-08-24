import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { Icon } from '@iconify/vue';
import Countup from 'vue-countup-v3'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({duration:1000});
createApp(App).component('Icon',Icon).component('Countup',Countup).mount('#app');


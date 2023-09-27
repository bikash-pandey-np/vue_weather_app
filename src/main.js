import { createApp } from 'vue'
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import App from './App.vue'

const app = createApp(App);

const $toast = useToast();

app.config.globalProperties.$toast = $toast;

app.mount('#app')

import { createApp } from 'vue';
import { Quasar } from 'quasar';
import App from './App.vue';
import 'quasar/dist/quasar.prod.css';

const app = createApp(App);

app.use(Quasar);

app.mount('#app');

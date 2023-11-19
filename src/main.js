import { createApp } from 'vue'
import App from './App.vue'
import router from './Router';

let app = createApp(App);

app.use(router).mount('#app');




import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index'; // Assuming your router configuration is in router/index.js
import '../src/assets/main.css';



const app = createApp(App);


app.use(router);



app.mount('#app');


export default app;
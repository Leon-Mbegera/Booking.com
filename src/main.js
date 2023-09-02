import './assets/main.css'

// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes'

createApp(App).use(router).use(bootstrap).mount('#app')

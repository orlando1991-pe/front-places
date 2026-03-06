import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import AOS from "aos"
import "aos/dist/aos.css"
import "leaflet/dist/leaflet.css"

AOS.init({duration: 800,
once: true})
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
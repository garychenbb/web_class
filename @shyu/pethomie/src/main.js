import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./assets/main.css";

// mock data
import "./api/mock";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// const API_URL = 'http://127.0.0.1:3001';
createApp(App)
  .use(router)
  .use(store)
  .mount("#app");

import "./assets/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/mainRouter";
import { FontAwesomeIcon } from "./components/fontawesome";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

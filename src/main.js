import "./assets/index.css";
import 'element-plus/theme-chalk/dark/css-vars.css'

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/mainRouter";
import { FontAwesomeIcon } from "./components/fontawesome";
import ElementPlus from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

const app = createApp(App);
const pinia = createPinia();
app.use(ElementPlus, {
  locale: zhCn,
});

app.use(router);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

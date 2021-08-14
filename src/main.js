import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Filtro para formatar valores em reais
const app = createApp(App);
app.config.globalProperties.$filters = {
  numberPrice(value) {
    value = Number(value);
    if (isNaN(value)) {
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    } else {
      return "";
    }
  },
};

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");

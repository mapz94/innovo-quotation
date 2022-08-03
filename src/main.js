import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueHtmlToPaper from "vue-html-to-paper";

Vue.use(Vuetify);

const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: [
    "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css",
    "https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css",
    "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
  ]
};

Vue.use(VueHtmlToPaper, options);

new Vue({
  vuetify: new Vuetify(),
  render: (h) => h(App)
}).$mount("#app");

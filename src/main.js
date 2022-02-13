import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import JsonCSV from 'vue-json-csv'

import "./components/registerGlobalComponents";

import "./assets/styles/index.css";

Vue.component('downloadCsv', JsonCSV)

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO("http://localhost:4001/"),
    vuex: {
      store,
      actionPrefix: "socket_",
      // mutationPrefix: "socket_",
    }
  })
);

Vue.use(Toast);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

import "bootstrap/dist/css/bootstrap.min.css";
import Vue from "vue";
import App from "./App.vue";
import VueClipboard from "vue-clipboard2";
import axios from "axios";
Vue.prototype.$http = axios;

Vue.use(VueClipboard);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

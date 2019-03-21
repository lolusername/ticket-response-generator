import "bootstrap/dist/css/bootstrap.min.css";
import Vue from "vue";
import App from "./App.vue";
import VueClipboard from "vue-clipboard2";
import axios from "axios";
import SocialSharing from "vue-social-sharing";

Vue.prototype.$http = axios;
Vue.use(SocialSharing);
Vue.use(VueClipboard);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

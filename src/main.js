import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import Icon from "ant-design-vue/lib/icon";

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';

Vue.component('icon', Icon)
Vue.use(VueAxios, axios)
Vue.use(Antd);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
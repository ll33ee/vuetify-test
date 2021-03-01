/* eslint-disable import/no-unresolved, import/extensions */
import 'babel-polyfill';
import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import App from './App.vue';
import router from './routes';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');

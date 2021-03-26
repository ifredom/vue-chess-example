import 'amfe-flexible';
import Vue from 'vue';
import App from './App';
import { router } from './router';
import "@/icons"; // svg-vue组件

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});

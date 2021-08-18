import Vue from 'vue';
import './plugins/axios';
import './plugins/bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './assets/scss/custom.scss';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

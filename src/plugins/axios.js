/* eslint-disable */
"use strict";

import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

const vm = new Vue({
  methods: {
    showErr(msg, title, type) {
      this.$toastr(type || 'error', {
        msg,
        title: title ?? 'Error :(',
        position: 'toast-top-full-width',
        timeout: 100000,
        clickClose: true,
      });
    },
  },
});

axios.interceptors.response.use(
  (response) => response.data,
  (err) => {
    if (err.response.status != 404)
      vm.showErr('An error ocurred, please contact support');
    return Promise.reject(err);
  }
);

const _axios = axios.create();

Plugin.install = function (Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;

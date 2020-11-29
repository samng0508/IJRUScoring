import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueNumberInput from '@chenfengyuan/vue-number-input';

Vue.config.productionTip = false


Vue.use(VueNumberInput);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

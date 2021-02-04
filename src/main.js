import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueNumberInput from '@chenfengyuan/vue-number-input';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleNotch, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

Vue.config.productionTip = false

library.add(faCircleNotch, faPrint)
library.add(faFacebookF, faInstagram, faYoutube)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueNumberInput);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

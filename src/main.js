// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App.vue'
import Router from './router/router'

// Form validation
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

// Global filters
import filters from './filters';

Vue.use(filters);

// Node components
import Unicon from 'vue-unicons'
import {uniFacebookF, uniTwitter, uniInstagram, uniPhone, uniMapMarker,
    uniEnvelope, uniMessage, uniBars, uniMultiply } from 'vue-unicons/src/icons';

Unicon.add([
  uniFacebookF, uniTwitter, uniInstagram, uniPhone, uniMapMarker, uniEnvelope, 
  uniMessage, uniBars, uniMultiply
])
Vue.use(Unicon)

import Axios from 'axios'

Vue.prototype.$http = Axios;

// Imported components
import TpButtonList from './components/tp-button-list'
import TpFooter from './components/tp-footer'
import TpContactForm from './components/tp-contact-form'
import TpHeader from './components/tp-header'
import TpList from './components/tp-list'
import TpMenu from './components/tp-menu'
import TpTabs from './components/tp-tabs'
import UicButton from './components/uic-button'
import UicCard from './components/uic-card'
import UicInput from './components/uic-input'
import UicTextArea from './components/uic-text-area'
import UicSpeechBubble from './components/uic-speech-bubble'

Vue.component('tp-button-list', TpButtonList)
Vue.component('tp-footer', TpFooter)
Vue.component('tp-contact-form', TpContactForm)
Vue.component('tp-header', TpHeader)
Vue.component('tp-list', TpList)
Vue.component('tp-menu', TpMenu)
Vue.component('tp-tabs', TpTabs)
Vue.component('uic-button', UicButton)
Vue.component('uic-card', UicCard)
Vue.component('uic-input', UicInput)
Vue.component('uic-text-area', UicTextArea)
Vue.component('uic-speech-bubble', UicSpeechBubble)

Vue.config.productionTip = false

const router = Router;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
import Vue from 'vue'
import App from './App'
import BuyDialogComponent from '@/components/Common/BuyDialog'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.component('app-buy-dialog', BuyDialogComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyAztgXHBZNsourjhbF_FtJq-_qw2_SOgro',
      authDomain: 'onlinestore-4a4ec.firebaseapp.com',
      databaseURL: 'https://onlinestore-4a4ec.firebaseio.com',
      projectId: 'onlinestore-4a4ec',
      storageBucket: 'onlinestore-4a4ec.appspot.com',
      messagingSenderId: '817948839800'
    }
    fb.initializeApp(config)

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchProducts')
  }
})

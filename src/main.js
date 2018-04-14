// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyC_WLhTuqbKU3unweXosx8zsKQccBOKs7c',
  authDomain: 'vue-school-forum.firebaseapp.com',
  databaseURL: 'https://vue-school-forum.firebaseio.com',
  projectId: 'vue-school-forum',
  storageBucket: 'vue-school-forum.appspot.com',
  messagingSenderId: '426987850952'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  beforeCreate () {
    store.dispatch('fetchUser', {id: store.state.authId})
  }
})

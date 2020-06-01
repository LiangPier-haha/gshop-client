import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})

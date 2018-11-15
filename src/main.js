import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

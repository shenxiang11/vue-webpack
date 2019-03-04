import Vue from 'vue'
import App from './App.vue'

/**
 * todo：查看这句的作用
 */
// Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

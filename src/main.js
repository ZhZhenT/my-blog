import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import hljs from 'highlight.js'
import 'highlight.js/styles/agate.css'

Vue.config.productionTip = false

/*
Vue.directive('hljs', el => {
let blocks = el.querySelectorAll('code');
console.log(el,blocks)
Array.prototype.forEach.call(blocks, hljs.highlightBlock);
});
*/

Vue.directive('hljs', {
  inserted: function (el) {
    let blocks = el.querySelectorAll('code')
    console.log(blocks, 1)
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  },
  componentUpdated: function (el, obj) {
    let blocks = el.querySelectorAll('code')
    blocks[0].innerHTML = obj.value
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

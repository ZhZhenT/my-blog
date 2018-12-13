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
Array.prototype.forEach.call(blocks, h ljs.highlightBlock);
});
*/

Vue.directive('hljs', {
  inserted: function (el, obj) {
    let blocks = el.querySelectorAll('code')
    blocks[0].innerHTML = obj.value
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  },
  componentUpdated: function (el, obj) {
    let blocks = el.querySelectorAll('code')
    blocks[0].innerHTML = obj.value
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  }
})

new Vue({
  data: {
    app: 'zheshiapp'
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

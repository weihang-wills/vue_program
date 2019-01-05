// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Mini from './components/mini'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#apps',
  router,
  components: {//component可以定义多个，然后下面的template决定使用哪个
    App,
    Mini
  },
  template: '<App>'//或者<Mini/>
})

new Vue({
  el: '#mini',
  router,
  components: { App,Mini },
  template: '<mini/>'
})

// 项目的启动入口
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/index.less'
// 加载 element 组件库
import ElementUI from 'element-ui'
// 加载 element 组件库的样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

// 创建vue跟实例
new Vue({
  router,
  // 通过render方法把app根组件渲染到#app入口节点
  render: h => h(App)
}).$mount('#app')

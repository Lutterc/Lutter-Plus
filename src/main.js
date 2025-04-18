// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')


// 引入element样式
import 'element-plus/dist/index.css';
import components from './components';
export default {
  // 注册组件
  install(Vue) {
    for (const prop in components) {
      if (components[prop]) {
        const component = components[prop];
        Vue.component(prop, component)
      }
    }
  }
}
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import ElementPlus from 'element-plus'
import { MyMessage } from './components/message'

import { MyIcon } from './components/icon'
import { MyBadge } from './components/badge'

import { createApp } from 'vue'
import App from './App.vue'

import './theme-chalk/index.scss'

// 引入icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
console.log(ElementPlusIconsVue);

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus);

app.use(MyMessage);
app.use(MyIcon)
app.use(MyBadge)

console.log(app);

app.mount('#app')
// createApp(App).use(ElementPlus).mount('#app')

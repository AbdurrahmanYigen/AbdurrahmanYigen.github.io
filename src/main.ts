import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount('#app')

/*
 * The transition effect must be added after mounting.
 * Otherwise, there is a withe-to-dark transition when dark-mode is active and side is reloaded
 */
requestAnimationFrame(() => {
  document.documentElement.classList.add('enable-theme-transition')
})

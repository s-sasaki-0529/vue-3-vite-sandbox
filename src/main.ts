import { createApp } from 'vue'
import SuperComponent from './components/SuperComponent.vue'
import i18n from './i18n'
import router from './router'
import store from './store'

const app = createApp(SuperComponent)
app.use(router) // 注入!
app.use(store) // 注入!!
app.use(i18n) // 注入!!!
app.mount('#app')

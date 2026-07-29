import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { animateDirective } from './directives/animate'

const app = createApp(App)

app.use(createPinia())

// Đăng ký Directive Animation
app.directive('animate', animateDirective)

app.mount('#app')

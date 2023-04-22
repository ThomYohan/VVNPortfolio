import { createApp } from 'vue'
import './style.css'
import './assets/globalStyles.css'
import App from './App.vue'
import router from './router/index.ts'
import naive from "naive-ui"
// import { defineComponent } from 'vue'
// import { darkTheme } from 'naive-ui'


createApp(App).use(router).use(naive).mount('#app')
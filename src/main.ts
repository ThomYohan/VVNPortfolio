import { createApp } from 'vue'
import './style.css'
import './assets/globalStyles.css'
import App from './App.vue'
import router from './router/index.ts'
// import { defineComponent } from 'vue'
// import { darkTheme } from 'naive-ui'


createApp(App).use(router).mount('#app')
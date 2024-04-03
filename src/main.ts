import { createApp } from 'vue'
import './style.css'
import './assets/globalStyles.css'
import App from './App.vue'
import router from './router/index.ts'
import naive from "naive-ui"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope, fas } from '@fortawesome/free-solid-svg-icons'

// import { faLinkedinIn, faGithub, faMailchimp } from '@fortawesome/free-brands-svg-icons'

// import { defineComponent } from 'vue'
// import { darkTheme } from 'naive-ui'

library.add( faLinkedin, faGithub, faEnvelope, fas, far, fab)

createApp(App).use(router).use(naive).component('faLinkedin, faGithub, faEnvelope', FontAwesomeIcon).mount('#app')
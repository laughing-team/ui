import { createApp } from 'vue'
import { createPinia } from 'pinia'
import UI, { colors } from '@indielayer/ui'
import App from './App.vue'
import router from './router'

// css
import './assets/base.css'

import icons from './icons'

const app = createApp(App)

app.use(UI, {
  prefix: 'X',
  icons,
  theme: {
    classPrefix: 'x-',
    colors: {
      primary: colors.emerald,
      secondary: colors.slate,
      success: colors.green,
      warning: colors.yellow,
      error: colors.red,
    },
  }
})
app.use(createPinia())
app.use(router)

app.mount('#app')

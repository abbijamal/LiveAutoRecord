import { createApp } from 'vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import { createRouter } from './router'
import { initStore } from './store'
import { RecordService } from './services/RecordService'
import { InteractionService } from './services/InteractionService'
// 这个必须放在下面，权重才能比 vuetify 高
import './style.css'

// TODO: 先简单点，不做初始化的 loading 之类的，出问题顶多 B/S 模式下的通知出问题
void RecordService.init()
InteractionService.blurSomeElementOnPressEscape = true

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
initStore(app)
app.use(vuetify)
app.use(createRouter())
app.mount('#app')

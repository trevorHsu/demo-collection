import { createApp } from 'vue'
import './styles/index.scss'
import 'ant-design-vue/dist/reset.css'

import App from './App.vue'
import router from './router'

import { PREFIX_NAME_WRAPPER } from './constants/prefix'

declare module 'vue' {
    export interface ComponentCustomProperties {
        PREFIX_NAME_WRAPPER: typeof PREFIX_NAME_WRAPPER
    }
}


const app = createApp(App)

app.config.globalProperties.PREFIX_NAME_WRAPPER = PREFIX_NAME_WRAPPER // 类名前缀生成函数

app
.use(router)
.mount('#app')

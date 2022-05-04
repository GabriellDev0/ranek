import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PageLoading from '@/components/PageLoading.vue'

const app = createApp(App)

app.use(store).use(router).mount('#app')

app.component('PageLoading', PageLoading)


app.config.globalProperties.$filters={
    numPrice(value){
        value = Number(value)
        if(!isNaN(value)){
            return value.toLocaleString("pt-br",{
                style: "currency",
                currency: "BRL"
            })
        }else{
            return ""
        }
    }
}
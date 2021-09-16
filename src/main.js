import { createApp } from 'vue'
import App from './App.vue'
import Cards from './components/Cards.vue'


const app = createApp(App)

app.component("card-section", Cards)

app.mount('#app')

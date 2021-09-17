import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import Cards from './components/Cards.vue'
import SearchBar from './components/SearchBar.vue'


const app = createApp(App)

app.component("card-section", Cards)
app.component("search-bar", SearchBar)
app.config.globalProperties.$axios = axios

app.mount('#app')

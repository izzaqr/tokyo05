import { createApp } from "vue"
import "./assets/reset.css"
import App from "./App.vue"

const tg = window.Telegram.WebApp
tg.ready() // сообщает Telegram, что приложение загрузилось
tg.expand() // раскрывает на весь экран

createApp(App).mount("#app")

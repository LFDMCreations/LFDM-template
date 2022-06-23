import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
// fax imports all the icons. Better import only the ones
// that are used
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee)
import "@/index.css";

const app = createApp(App);
app.component('FontAwesome', FontAwesomeIcon)
app.use(createPinia());
app.use(router);

app.mount("#app");

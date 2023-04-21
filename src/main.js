import router from '@/router';
import { defaultConfig, plugin } from '@formkit/vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { faIcons, formkitConfig } from './theme';

// Pinia Store
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

// Fontawesome
library.add(faIcons);

const app = createApp(App);
app.component('FontAwesome', FontAwesomeIcon);
app.use(plugin, defaultConfig(formkitConfig));
app.use(router);
app.use(pinia);
app.mount('#app');

/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { useAxios } from '@/composables/useAxios';

const app = createApp(App)

const axiosInstance = useAxios(); // Initialize the Axios instance
app.provide('axios', axiosInstance); // Provide Axios globally

registerPlugins(app)

app.mount('#app')

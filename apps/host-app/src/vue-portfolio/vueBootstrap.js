import { createApp } from "vue";
import App from './VueApp.vue';

const vueBootstrap = function (container) {
    const divContainer = document.createElement('div');
    container.appendChild(divContainer);
    const VueApp = createApp(App);
    VueApp.mount(divContainer);
}

export default vueBootstrap;
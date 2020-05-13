import Vue from 'vue'
import App from './App.vue'
import modal from "../src/plugin";
import Modal2 from "./components/modals/Modal2";
import Modal1 from "./components/modals/Modal1";
import Modal3 from "./components/modals/Modal3";


Vue.config.productionTip = false;

const modals = {
    "Modal-1": Modal1,
    "Modal-2": {
        component: Modal2,
        config: {
            css: {
                class: {
                    main: "modal-2-body"
                },
                animation: "rotate"
            }
        }
    },
    "Modal-3": {
        component: Modal2,
        config: {
            css: {
                class: {
                    main: "modal-3-body",
                    back: "modal-3-back",
                },
                animation: "zoom"
            }
        }
    },
    "Modal-4": {
        component: Modal3,
        config: {
            css: {
                animation: "back-translate"
            }
        }
    }
};

Vue.use(modal, {
    modals: modals,

    css:{
        class: {
            main: "modal-main-0",
            back: "modal-back-0",
        },
        animation: "translate"
    }
});



new Vue({
  render: h => h(App),
}).$mount('#app');

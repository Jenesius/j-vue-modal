import Vue from 'vue'
import App from './App.vue'
import modal from "../src/plugin";
import ModalTest1 from "./components/ModalTest1";
import ModalTest2 from "./components/ModalTest2";

Vue.config.productionTip = false;

const modals = {
    "ModalTest1": ModalTest1,
    "ModalTest2": ModalTest2
};

Vue.use(modal, {
    modals: modals,
    css:{
        class: {
            main: "modal-main-1",
            back: "modal-back-1",
        },
        animation: "zoom"
    }
});



new Vue({
  render: h => h(App),
}).$mount('#app');

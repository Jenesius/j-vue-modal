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
    style:{
        container: "modal-test-1",
        background: "modal-test-1-background"
    }
});



new Vue({
  render: h => h(App),
}).$mount('#app');

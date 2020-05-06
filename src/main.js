import Vue from 'vue'
import App from './App.vue'
import modal from "j-vue-modal";
import ModalTest1 from "./components/ModalTest1";
import ModalTest2 from "./components/ModalTest2";

Vue.config.productionTip = false;

const modals = {
    "ModalTest1": ModalTest1,
    "ModalTest2": ModalTest2
};

Vue.use(modal, {
    modals: modals
});


new Vue({
  render: h => h(App),
}).$mount('#app');

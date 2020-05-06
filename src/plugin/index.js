import Modal from "./Modal";
import ModalWorker, {PRIVATE_STATE} from "./modalWorker";

export default {
    install(Vue, options) {

        //Добавяем глобальный объект дял работы с модальными окнами

        Vue.prototype.$modal = {
            open  : (name, params = {}) => {
                return ModalWorker.open(name, params);
            },
            close : (a) => {
                ModalWorker.close(a);
            },
            update: (params = {}) => {
                ModalWorker.data.params = params;
            },
            get params(){
                return ModalWorker.data.params;
            },
            get key(){
                return ModalWorker.data.key;
            },
            get name(){
                return ModalWorker.data.name;
            }
        };




        if (!options.hasOwnProperty("modals")) {
            console.warn("J-vue-router: please set modals in options");
        } else {
            PRIVATE_STATE.setList(options.modals);
        }

        //Регистрируем компоненту Modal
        Vue.component("Modal", Modal);

    }
}

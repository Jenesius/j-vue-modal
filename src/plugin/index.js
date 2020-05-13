import Modal from "./Modal";
import ModalWorker, {PRIVATE_STATE} from "./modalWorker";

export default {
    install(Vue, options) {

        Vue.prototype.$modal = {
            open  : (name, params = {}, config = undefined) => {

                return ModalWorker.open(name, params, config);
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
            },
        };

        //Конфигурация элемента после его создания
        setTimeout(()=>{
            ModalWorker.init(options);
        }, 0);



        if (!options.hasOwnProperty("modals"))
            console.warn("J-vue-router: please set modals in options");
        else
            PRIVATE_STATE.setList(options.modals);

        //Регистрируем компоненту Modal
        Vue.component("Modal", Modal);

    }
}


/**
 * ModalWorker V3
 * имеет 2 публичных метода
 *
 * open(NameModal, objectOfParams) - открывает окно и устанавливает входные параметры
 * close(name = null) закрывает модальное окно, если указан name - закроет окно лишь в том случа, что name совпадает с текущим
 *
 *
 * имеет 2 публичных свойства
 * params - пользоватльские параметры текущего модлаьного окна
 * name   - название текущего модального окна
 *
 * */


export const PRIVATE_STATE = {
    modalList: {},
    setList(list){
        this.modalList = list;
    },
    getElem(x){
        return this.modalList[x];
    }
};

class ModalWorker {
    constructor() {
        this._name = null;

        this._openFunModal  = Function;
        this._closeFunModal = Function;
        this.data = {};
        this.privateMethods = {};

    }

    init(options){

        let tmp = options;

        if (tmp.hasOwnProperty("css")) {

            tmp = options.css;
            if (tmp.hasOwnProperty("class")) {
                tmp = tmp.class;
                if(tmp.hasOwnProperty("main"))
                    this.privateMethods.setGlobalClass("main", tmp.main);

                if(tmp.hasOwnProperty("back"))
                    this.privateMethods.setGlobalClass("back", tmp.back);
            }


            tmp = options.css;
            if (tmp.hasOwnProperty("animation")) {
                this.privateMethods.setAnimation("global", tmp.animation);
            }

        }
    }

    open(name, params = {}){

        let key = this._openFunModal(PRIVATE_STATE.getElem(name));

        this._name   = name;
        this.data.params = params;

        return key;
    }

    close(name = undefined){

        if (name === undefined || typeof name === "object") {
            MODAL._closeFunModal();
            MODAL._name = undefined;
        }
        if (MODAL.name === name){
            MODAL._closeFunModal();
            MODAL._name = undefined;
        }
    }

    get name(){
        return this._name;
    }
    parseConfig(config){

        MODAL.privateMethods.clearPersonConfig();

        if (config === undefined) return;

        let tmp = config;

        if (tmp.hasOwnProperty("css")) {

            tmp = config.css;
            if(tmp.hasOwnProperty("class")){

                tmp = tmp.class;
                if (tmp.hasOwnProperty("main")) {
                    this.privateMethods.setPersonClass("main", tmp.main);
                }

                if (tmp.hasOwnProperty("back")) {
                    this.privateMethods.setPersonClass("back", tmp.back);
                }
            }


            tmp = config.css;
            if (tmp.hasOwnProperty("animation")) {
                this.privateMethods.setAnimation("person", tmp.animation);
            }

        }

    }


}

const MODAL = new ModalWorker();

export default MODAL;

export function listen(object){
    MODAL._openFunModal = object.open;
    MODAL._closeFunModal = object.close;
    MODAL.data = object.data;
    MODAL.privateMethods = object.privateMethods;
}



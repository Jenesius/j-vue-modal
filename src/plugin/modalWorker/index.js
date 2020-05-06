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
}

const MODAL = new ModalWorker();

export default MODAL;

export function listen(object){
    MODAL._openFunModal = object.open;
    MODAL._closeFunModal = object.close;
    MODAL.data = object.data;
}




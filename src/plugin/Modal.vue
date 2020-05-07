<template>
    <transition :name="nameAnimation">
    <div v-if = "name !== undefined"
        :class = cssClassMain
    >
            <component :is=name :key = key></component>

        <div @click="close"
            :class = cssClassBack
        ></div>
    </div>
    </transition>
</template>

<script>

    import {listen} from "./modalWorker";

    export default {
        name: "Modal",
        components: {},
        data:() => {
            return {
                name: undefined,
                key: 0,
                params: {},

                private: {
                    css: {
                        class: {
                            main: {
                                global: [],
                                person: [],
                            },
                            back: {
                                global: [],
                                person: [],
                            }
                        }
                    },
                    animation: {
                        global: "",
                        person: undefined
                    }
                },
            };
        },
        computed: {
            cssClassMain(){

                return [...this.private.css.class.main.global, ...this.private.css.class.main.person];
            },
            cssClassBack(){
                return [...this.private.css.class.back.global, ...this.private.css.class.back.person];
            },
            nameAnimation(){
                return (this.private.animation.person === undefined)? this.private.animation.global :this.private.animation.person;
            }
        },
        methods:{
            close(){
                this.name = undefined;
            },
            open(nameComponent){
                this.key++;
                this.name = nameComponent;

                return this.key;
            },

            /**
             * private methods
             * */
            setGlobalClass(name, value){


                this.private.css.class[name].global = (typeof value === "string")? [value] : value;
            },
            setPersonClass(name, value){
                this.private.css.class[name].person = (typeof value === "string")? [value] : value;
            },
            setAnimation(type, value){
                this.private.animation[type] = value;
            },
            clearPersonConfig() {

                this.setPersonClass("main", []);
                this.setPersonClass("back", []);

                this.setAnimation("person", undefined);
            }
        },

        created() {
            listen({
                open: this.open,
                close: this.close,
                data: this.$data,
                privateMethods:{
                    setGlobalClass: this.setGlobalClass,
                    setPersonClass: this.setPersonClass,
                    setAnimation  : this.setAnimation,
                    clearPersonConfig   : this.clearPersonConfig,
                }
            })
        },
    }
</script>

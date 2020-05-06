<template>
    <div class = "modal" v-if = "name !== undefined">

            <component :is=name :key = key></component>

        <div class = "modal-background" @click="close"></div>
    </div>
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
                params: {}
            };
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

        },
        created() {
            listen({
                open: this.open,
                close: this.close,
                data: this.$data
            })
        },
    }
</script>

<style scoped>
    .modal{
        display: flex;
        align-items: center;
        justify-content: center;

        position: fixed;
        height: 100%;
        width: 100%;

        top: 0;
        left: 0;
        z-index: 9999;


    }
    .modal-background{
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: -1;
        background: rgba(62, 62, 62, 0.5);
    }


</style>

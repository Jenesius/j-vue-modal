<template>
    <div v-if = "name !== undefined"

        :class = "[
            ...defaultMain,
            ...customMain
        ]"
    >

            <component :is=name :key = key></component>

        <div @click="close"
            :class = "[
                ...defaultBack,
                ...customBack
            ]"
        ></div>
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
                params: {},

                defaultMain: [],
                defaultBack: [],

                customMain: [],
                customBack: [],
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
        computed:{
            arrayClassMain(){
                let output = [];

                if (typeof this.defaultMain === "string")



                return output;
            },
            arrayClassBack(){}
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



</style>

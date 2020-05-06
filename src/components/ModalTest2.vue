<template>
    <div class = "test1">
        <p class = "test1-title">{{ title }}</p>
    </div>
</template>

<script>
    export default {

        computed: {
            title(){

                return this.$modal.params.title;
            }
        },
        name: "ModalTest2"
    }
</script>

<style scoped>
    .test1{
        display: flex;
        align-items: center;
        justify-content: center;

        height: 100px;
        width: 90vw;

        background-color: red;
        border-radius: 10px;
    }
    .test1-title{
        font-size: 25px;

        color:#2c3e50;
        font-weight: 600;
    }
</style>

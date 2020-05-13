<template>
    <div class = "widget-modal modal-1">
        <p>modal-1</p>
    </div>
</template>

<script>
    export default {
        name: "Modal1"
    }
</script>

<style scoped>
    .modal-1{
        background-color: rgba(255, 0, 0, 0.66);
        border: 1px solid #8d0000;
    }
    .modal-1>p{
        font-weight: 600;
        font-size: 18px;
        color:white;

        line-height: 26px;
    }
</style>

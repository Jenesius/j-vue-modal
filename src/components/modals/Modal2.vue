<template>
    <div class = "widget-modal modal-2">
        <p>modal-2</p>
    </div>
</template>

<script>
    export default {
        name: "Modal2"
    }
</script>

<style>
    .modal-2{
        background-color: rgba(60, 54, 255, 0.49);

        border-radius: 50%;
    }
    .modal-2>p{
        color:white;

        font-weight: 600;
        line-height: 26px;

        font-size: 18px;

    }

    .modal-2-body{
        align-items: flex-end;
    }
    .modal-3-body{
        align-items: flex-start;
    }
    .modal-3-back{
        background-color: #84b160;
    }
</style>

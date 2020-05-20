<template>
  <div id="app">
    <modal/>

    <button @click = "open1">open test1</button>

    <button @click = "open2">open test2</button>

    <button @click = "open3">open test3</button>

    <br>
    <br>

    <button @click= "open4">open TEST3</button>

  </div>
</template>

<script>

  import jsImport from "./assets/jsImport";

export default {
    name: 'App',
    methods:{
      open1(){
        this.$modal.open("Modal-1");
      },
      open2(){
        this.$modal.open("Modal-2");
      },
      open3(){
        this.$modal.open("Modal-3");
      },
      open4(){
        this.$modal.open("Modal-4");
      }
    },

    mounted() {
      jsImport();
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.modal-main-0{
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.modal-back-0{
  position: absolute;
  z-index: -1;

  height: 100%;
  width: 100%;

  background: rgba(62, 62, 62, 0.5);
}


.rotate-enter .widget-modal{
  transform: rotate(90deg);
}

.translate-enter .widget-modal{
  transform: translateY(-100px);
}

.back-translate-enter .widget-modal{
  transform: translateY(100px);
}
.zoom-enter .widget-modal{
  transform: scale(18)
}

  .widget-modal{
    transition: 1s;
  }

</style>

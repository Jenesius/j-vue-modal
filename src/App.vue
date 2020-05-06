<template>
  <div id="app">
    <modal/>

    <button @click = "open1">open test1</button>

    <button @click = "open2">open test2</button>

    <button @click = "open3">open test3</button>

  </div>
</template>

<script>


export default {
    name: 'App',
    methods:{
        open1(){
            this.$modal.open("ModalTest1", {
            title: "test0",
            customClassBack: ["test-custom-back"]
        });
      },
      open2(){
        this.$modal.open("ModalTest1", {
          title: "test0",
          customClassBack: ["test-custom-back"]
        }, {
          style: {
            container: "style-2-c",
            background: "style-2-b"
          }
        });
      },
      open3(){
        this.$modal.open("ModalTest1", {
          title: "test0",
          customClassBack: ["test-custom-back"]
        }, {
          style: {
            background: "style-3-b"
          }
        });
      }
    },


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


.modal-test-1{
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
.modal-test-1-background{
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: rgba(62, 62, 62, 0.5);
}
.style-2-b{
  background-color: red;
}
  .style-2-c{
    align-items: flex-end;
  }
.style-3-b{
  background-color: blue;
}
</style>

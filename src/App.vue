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
            });
      },
      open2(){
        this.$modal.open("ModalTest1", {
          title: "test0",
          customClassBack: ["test-custom-back"]
        }, {
          css: {
              class: {
                main: "test-2-main",
                back: ""
              },
            animation: "fade"
          },

        });
      },
      open3(){
        this.$modal.open("ModalTest1",
                {
            title: "test0",
          }, {
            css: {
              class: {
                main: "test-3-main",
                back: "test-3-back"
              }
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


.modal-main-1{
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
.modal-back-1{
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: rgba(62, 62, 62, 0.5);
}
.test-2-main{
  align-items: flex-end;
}
.test-3-main{
  align-items: flex-start;
  justify-content: flex-end;
}
.test-3-back{
  background: rgba(99, 150, 82, 0.5);
}

.fade-enter .modal-a {
  transform: translateY(100px);
}
  .zoom-enter .test1{
    transform: scale(0.8)
  }

</style>

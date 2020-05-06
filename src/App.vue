<template>
  <div id="app">
    <modal/>


  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  mounted() {

    this.$modal.open("ModalTest1", {
      title: "test0"
    });

    setTimeout(() => {

      this.$modal.update({
        title: "test1",
      })

      setTimeout(() => {
        this.$modal.close();

        setTimeout(() => {
          this.$modal.open("ModalTest2", {
            title: "Test2"
          })

          setTimeout(() => {
            this.$modal.close("ModalTest1");
          }, 1000);

          setTimeout(() => {
            this.$modal.close("ModalTest2");
          }, 2000)

        }, 1000)

      }, 1000)

    }, 1000)


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
</style>

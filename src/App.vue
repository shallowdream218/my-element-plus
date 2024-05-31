<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <MyMessage/>
  <!-- <MyComp /> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyMessage from './testComponents/MyMessage.vue'

export default {
  name: 'App',
  components: {
    MyMessage
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family:2Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

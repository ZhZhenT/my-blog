<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <testdata></testdata>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import testdata from './testdata'

export default {
  name: 'home',
  components: {
    HelloWorld,
    testdata
  }
}
</script>

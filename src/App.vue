<template>
  <div id="app">

    <div class="post-content" v-hljs="msg">
      <pre><code>{{msg}}</code></pre>
    </div>

    <button @click="bindclickupdatemsg">修改</button>

  </div>
</template>
<script>

const msg = `  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
  }`

export default {
  data () {
    return {
      msg: msg
    }
  },
  computed: {

  },
  methods: {

    bindclickupdatemsg () {
      this.msg = `#app`
    }

  },
  mounted () {

  }
}
</script>
<style lang="less">

</style>

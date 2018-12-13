<template>
    <div class="post-content" v-hljs="msg">
        <pre><code></code></pre>
        <button @click="test">修改</button>
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
    name: "hljscode",
    data () {
        return {
            msg:msg
        }
    },
    computed: {

    },
    methods: {
        test () {
            this.msg =  `  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webk
  }`
        }
    },
    mounted () {

    }
}
</script>

<style scoped>

</style>
<template>
    <div>
        test:<p>{{test}}</p>
        <p></p>
        <button @click="modifyData">修改</button>
    </div>
</template>

<script>
    let data = {
        test: 'heiheiheeheiehiehe'
    }
    export default {
        name: 'testdata',
        data: function () {
            return data
        },
        hehe: {
            test: '组件'
        },
        methods: {
            modifyData () {
                console.log(this)
                this.test = '112131'

            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <h1>home</h1>
        <!-- router-link 的to属性要注意，路由是先进入到home,然后才进入相应的子路由如 phone,所以书写时要把 home 带上 -->
        <p>
            <router-link to="/home/phone">手机</router-link>
            <router-link to="/home/computer">电脑</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: "我是home 组件"
            }
        }
    }
</script>
<style lang="scss">
    div{
        p{
            font-size:20px;
            color:blue;
        }
    }
</style>

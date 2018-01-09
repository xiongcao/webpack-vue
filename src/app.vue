<template>
    <div id="app">
        <img src="./resource/image/indexImg/workbench.jpg">
        <img src="./resource/image/defaultImg/defaultComm.png">
        <header>
            <!-- router-link 定义点击后导航到哪个路径下 -->
            <router-link to="/home">Home</router-link>
            <router-link to="/about">About</router-link>
            <!--  增加两个到user组件的导航，可以看到这里使用了不同的to属性 -->
            <!-- <router-link to="/user/123">User123</router-link> -->
            <router-link to="/user/456">User456</router-link>
            <router-link :to="{ name: 'user', params: { id: 123 }}">User</router-link>   <!-- 当使用对象作为路由的时候，to前面要加一个冒号,表示绑定 -->
        </header>
        <!-- 对应的组件内容渲染到router-view中 -->
        <router-view></router-view> 
    </div>
</template>
<script>
    export default {
        
    }
</script>
<<style>
    img{
        width:200px;
        height:200px;
    }
</style>

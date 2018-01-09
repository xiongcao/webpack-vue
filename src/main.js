import Vue from 'vue';
import './main.css';
import App from './app.vue';
import VueRouter from "vue-router";
// 引入路由
import routers from "./router.js";// import router 的router 一定要小写， 不要写成Router, 否则报 can't match的报错

var router =  new VueRouter({
    routes:routers
})

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,  // 注入到根实例中
    render: h => h(App),
    template: '<App/>',
    components: { App }
})






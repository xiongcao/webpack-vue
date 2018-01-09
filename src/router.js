const routes = [
    {
        path:"/home",
　　　　　// 下面这个属性也不少，因为，我们是先进入home页面，才能进入子路由
        component: resolve => require(['./views/home.vue'], resolve),
　　　　 // 子路由
        children: [
            {
                path: "phone",
                component: resolve => require(['./views/phone.vue'], resolve)
            },
            {
                path: "computer",
                component: resolve => require(['./views/computer.vue'], resolve)
            },
            // 当进入到home时，下面的组件显示
            {
                path: "",
                component: resolve => require(['./views/phone.vue'], resolve)
            }
        ]
    },
    {
        path: "/about",
        component: resolve => require(['./views/about.vue'], resolve)
    },
    /*新增user路径，配置了动态的id*/
    {
        path: "/user/:id",
        name: "user",
        component: resolve => require(['./views/user.vue'], resolve)
    },
    // 重定向
    {
        path: '/', 
        redirect: '/home' 
    }
]

export default routes;
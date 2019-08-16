import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(Router)
//定义路由组件
import Home from '../views/Tabbar/Home'
import Login from '../views/Tabbar/Login'
import Logup from '../views/Tabbar/Logup'
import Shoplist from '../views/Tabbar/Shoplist'
import List from '../views/Tabbar/List'
import Detail from '../views/Tabbar/Detail'
import Cart from '../views/Tabbar/Cart'
import Mine from '../views/Tabbar/Mine'

const routes = [{
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/shoplist',
        name: 'shoplist',
        component: Shoplist
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/logup',
        name: 'logup',
        component: Logup
    },
    {
        path: '/list',
        name: 'list',
        component: List
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/mine',
        name: 'mine',
        component: Mine
    },
    // 重定向
    {
        path: '/',
        redirect: '/home'
    }

]

const router = new Router({
    routes
})
router.beforeEach(async (to, from, next) => {
    // const data = await axios.post('https://www.easy-mock.com/mock/5d3fe0fc738f621651cd1f4a/list/login', {
    //     params: {
    //         // 存在cookie里面
    //         // 用token代替你的用户名和密码
    //         token: 'ahsdioasydhkaujhdaskj'
    //     }
    // })
    let isLogin = 1;
    // 如果你没登陆你就进sign
    // 如果你登陆 next

    // 如果你登陆了你就next
    // 或者你就要去登陆页，你也可以next

    // 如果你是首页，详情页，登录页或者你登陆了，都可以进去，否则不给你进去
    if (isLogin || to.name === 'login' || to.name === 'home' || to.name === 'shoplist' || to.name === 'logup' || to.name === 'detail' || to.name === 'list') {
        next()
    } else {
        // 编程式导航
        router.push({
            name: 'login'
        })
    }
})
export default router
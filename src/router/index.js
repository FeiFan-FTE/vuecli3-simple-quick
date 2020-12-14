import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import {  getToken,  setSession,getSession } from '@/libs/util'
Vue.use(VueRouter)
const LOGIN_PAGE_NAME = 'login'
const router = new Router({
    routes,
    mode: 'hash'
    // history
})

router.beforeEach((to, access, next) => {
   
    if (to.meta.title) { //判断是否有标题
        document.title = to.meta.title
    }
    
    let token = getToken()
    if (!token && to.name !== LOGIN_PAGE_NAME) {
        // 未登录且要跳转的页面不是登录页
    
        next({
            name: LOGIN_PAGE_NAME // 跳转到登录页
        })
    } else if (!token && to.name === LOGIN_PAGE_NAME) {
        // 未登陆且要跳转的页面是登录页
      
        next() // 跳转
    } else if (token && to.name === LOGIN_PAGE_NAME) {
        // 已登录且要跳转的页面是登录页
        next({
            name: 'index' // 
        })
    } else {
        if (to.path == '/') {
            next({
                name: 'index' // 
            })
        } else {
            next()

        }
    }
  
})
router.afterEach(to => {
    ViewUI.LoadingBar.finish()
    window.scrollTo(0, 0)
})
export default router

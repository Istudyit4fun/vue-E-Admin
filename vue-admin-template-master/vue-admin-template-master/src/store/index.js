import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    // modules ---vuex的模块化  
    // 并没有设置 根级别的state 和 mutation......
    modules: {
        app,
        // 这里 引入app/index.js ---是引入了文件里面的代码
        // 但是 app 却等于  这个文件代码默认导出的对象 export {}
        // 这就是 模块化 导入和导出   所以app就是一个对象
        // 但是这个app对象 前面有 。。。代码 做支撑 
        // import app from './modules/app'  --> 对象 + 代码支持  ==> app==对象
        settings,
        user
    },
    getters
})

export default store
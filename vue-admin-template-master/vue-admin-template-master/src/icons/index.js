import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg component

// register globally
Vue.component('svg-icon', SvgIcon)
    //  vue注册全局 组件 -----这个组件专门使用 icon ---怎么实现的 内容是啥

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
    // 以上两行代码的含义： 就是将所有的SVG目录下的所有 以.svg为后缀的文件 引入到项目中
import Vue from 'vue'  
import App from './index.vue'  

new Vue({   
    el: '#app',
    //渲染内容
    // render:function(c){
    // 	return c(App);
    // },
    render:c=>c(App),
    //es6写法，=>函数
    //1.当参数只有一个的时候，小括号可以省略
    //2.当代码只有一行且是返回值的时候，大括号可以省略
})

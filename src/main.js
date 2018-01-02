import Vue from 'vue'  
// import App from './app.vue'  #基础demo，v-if v-for,v-on等等
// import App from './list.vue'  #基础demo， 
// import App from './index.vue'  
import App from './parent.vue'  

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

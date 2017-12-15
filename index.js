var vue = require('vue').default;
// import vue from './lib/vue-2.4.2.js';
var app = new Vue({
    el: '#app',
    // components: {
    //     app: require('./src/app.js')
    // },
    data: function (){
        return {
            message: 'hello word!!'
        };
    }    
});
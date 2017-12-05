var vue = require('vue');

var app = new vue({
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
var template = require('./app.html');
require('./app.css');

module.exports = {
    template: template,
    data: function (){
        return {
            message: 'hello word!!'
        };
    }
};
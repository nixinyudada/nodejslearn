var template = require('art-template')

var ret = template.render('Hello {{ name }}',{
    name:"Jack!"
});

console.log(ret)
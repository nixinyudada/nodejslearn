var fs = require('fs');

fs.readFile('./data/hello.txt',(error,data
)=>{
    console.log('data:' + data)
    console.log('error:' + error)
})


// 写文件的三个参数：文件路径，内容，成功与否的回调
fs.writeFile('./data/你好.md','大家好！我是Node.js!',error=>{
    console.log(error)
})
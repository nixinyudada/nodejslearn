var mongoose = require('mongoose')

// 1. 连接数据库
// 指定连接的数据库不需要存在，当你插入第一条数据之后就会自动被创建出来

mongoose.connect('mongodb://localhost/itcast1')

// 2. 设计集合结构（表结构）
// 字段名称就是表结构中的属性名称
// 值
// 约束的目的是为了保证数据的完整性，不要有脏数据
var userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true //必须有 
    },
    password:{
        type:String,
        required:true
    },
    email: {
        type:String
    }
})

// 3. 将文档结构发布为模型
// mongoose.model 方法就是用来将一个架构发布为 model
// 第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//          mongoose 会自动将大写名词的字符串生成小写复数 的集合名称
//          例如这里的 User 最终会变为 users 集合名称

// 第二个参数：架构 Schema  返回值：模型架构函数
var User = mongoose.model('User',userSchema)


// 4. 当我们有了模型构造函数之后，就可以使用这个构造函数对 users 中的数据为所欲为了


var admin = new User({
    username:'amdin11111111',
    password:'123456',
    email:'admin11111@admin.com'
})

// admin.save((err,ret)=>{
//     if (err){
//         console.log('保存失败！')
//     }else{
//         console.log('保存成功！')
//         console.log(ret)
//     }
// })


// 数据的查询


User.find((err,ret)=>{
    if (err){
        console.log("查询失败！")
    }else{
        console.log(ret)
    }
})

// 按条件查询

// User.find({
//     password:'123456'
// },(err,ret)=>{
//     if (err){
//         console.log("查询失败！")
//     }else{
//         console.log(ret)
//     }
// })


// 删除数据

// User.remove({
//     username:'amdin'
// },(err,ret)=>{
//     if (err){
//         console.log('删除失败！')
//     }else{
//         console.log('删除成功！')
//         console.log(ret)
//     }
// })


// 数据的更新

// User.findByIdAndUpdate('5c1511d693d7073bc84cf8c6',{
//     password:'321'
// },(err,ret)=>{
//     if (err){
//         console.log('更新失败！')
//     }else{
//         console.log('更新成功！')
//     }
// })
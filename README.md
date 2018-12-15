# 学习 node js 的第一天


- 初识 Node.js
    - <a href="#什么是Node.js">什么是Node.js?</a>
    - <a href="#Node.js能做什么">Node.js能做什么?</a>
    - <a href="#学习资源">学习资源</a>
    - <a href="#学习任务">学习任务</a>
- <a href="#Node.js中的模块系统">Node.js中的模块系统</a>
    - <a href="#系统模块">系统模块</a>
    - <a href="#自定义模块">自定义模块</a>
- Web 服务器开发
    - <a href="#IP地址和端口号">IP地址和端口号</a>
- <a href="#代码风格">代码风格</a>
- <a href="#模板引擎">模板引擎</a>
    - <a href="#在Node中使用`art-template`模板引擎">在Node中使用 art-template 模板引擎</a>
          
- <a href="#Express">Express</a>
    - <a href="#修改完代码自动重启">修改完代码自动重启</a>
    - <a href="#服务端解析客户端POST数据">服务端解析客户端POST数据</a>
    - <a href="#Express路由模块的提取">Express路由模块的提取</a>
- <a href="#在Node.js中操作Mongodb">在 Node.js 中操作 Mongodb</a>
    - <a href="#"></a>
    - <a href="#"></a>
    - <a href="#"></a>
    - <a href="#"></a>



### <a name="#什么是Node.js">什么是Node.js?</a>

[node js 中文社区](https://cnodejs.org/)

1. node.js **不是**一门语言，也不是库或框架
2. Node.js是一个javascript**运行时环境**
3. Node.js可以**解析**和**执行**Javascript代码
4. 之前的javascript代码可能只允许在浏览器执行，但是Nodejs可以使javascript**脱离浏览器**来运行！

- 浏览器中的javascript
    - EcmaScript (基本语法)
    - BOM
    - DOM
- Node.js中的Javascript
    - <s>BOM、DOM</s>,<- Node.js中没有这两个概念
    - EcmaScript
    - 除此之外，Node为javascript提供了一些服务器级别的操作API
        - 例如文件读写
        - 网络服务器的构建
        - 网络通信
        - http服务器等
- Node.js uses an event-driven,non-blocking I/O model that makes it lightweight and efficient.
    - event-driven 事件驱动
    - non-blocking I/O model 非阻塞IO模型（异步机制）
    - lightweight and efficient. 轻量和高效
- Node.js' package ecosystem,npm,is the largest ecosystem of open source libraries in the world.
    - npm 是世界上最大的开源库及生态系统
    - 绝大多数javascript相关的包都存放在了npm上，这样可以更加方便开发人员下载和使用。





 ### <a name="Node.js能做什么">Node.js能做什么?</a>

 - Web 服务器后台
 - 命令行工具
    - npm(node)
    - git(c)
    - hexo(node)
    - 等等
    - 对于前端开发接触比较多的命令行工具
        - webpack
        - gulp
        - npm



 ### <a name="学习资源">学习资源</a>

 - 《深入浅出Node.js》 => 对理解原理底层有帮助
 - 《Node.js权威指南》 => API讲解
 - [javascript标准参考教程(alpha)](http://javascript.ruanyifeng.com) => 阮一峰
 - [Node入门](http://www.nodebeginner.org/index-zh-cn.html)
 - [官方API文档](http://nodejs.org/dist/latest-v6.x/docs/api)
 - [CNODE社区](http://cnodejs.org)
 - [CNODE-新手入门](http://cnodejs.org/getstart)








 ### <a name="学习任务">学习任务</a>

 - B/S 编程模型
    - Browser - Server
    - back-end
    - 通过学习Node，掌握BS编程模型
- 模块化编程
    - RequireJS
    - SeaJS
    - 在Node中可以像`@import()`一样来引用加载javascript脚本文件（模块化）
- Node常用API
- 异步编程
    - 回调函数
    - Promise
    - async
    - generator
- Express Web 开发框架
- EcmaScript 6 (ES6)
- ...



### <a name="Hello world!">Hello world!</a>

```cmd
PS E:\gitFile\nodejs学习\初学nodejs\nodejslearn> node .\01\code\hello-world.js
Hello world!
```

hello-world.js

```js
console.log("Hello world!")
```

使用node这个指令来执行这个js文件后打印的字符串（注意该文件所在路径）



### <a name="Node.js中的模块系统">Node.js中的模块系统</a>

#### <a name="系统模块">系统模块</a>

**读取文件**
> Node中javascript具有文件操作的能力，而浏览器则没有。如果在Node中需要进行文件操作，就必须引入fs(file-system)模块，在该模块中提供了所有文件操作相关的API，例如：`fs.readFile`读文件操作。

**引入模块**
`var fs = require('fs')`

**http模块**

> 使用`http`模块构建一个Web服务器，`http`是Node提供的创建编写服务器的一个内置模块

一个最基本的服务器，需要引入`http`模块，调用`http.createServer()`来创建一个服务器实例，
之后为该实例注册一个`request`事件，并设置回调，参数是request,response。
**客户端访问服务器之后，服务器必须使用response进行回应，并使用`end()`方法结束，否则客户端与服务端将保持连接状态！**

```js
var http = require('http')

// 使用 http.createServer() 方法创建一个Web服务器，它会返回一个Server实例

var server = http.createServer()

server.on('request',(request,response)=>{
  console.log('收到客户端的请求了！')
  console.log('请求路径：' + request.url)  

  // 响应 response
  // write 可以使用多次，但是最后一定要使用 end 来结束响应
  response.write("Hello!")
  response.write("需要 “end”!")
  response.end(); // 必须end()
})

// 绑定端口号，启动服务器
server.listen(3000,()=>{
    console.log('服务器启动成功！请通过 http://127.0.0.1:3000 进行访问！')
    
  });
```




#### <a name="自定义模块">自定义模块</a>

```js
require("./b") // "./" 不能省略，不然会被认为是核心模块
console.log("a.js 执行完毕！");
```

1. 引入自定义模块（js文件）时
    - 相对路径必须加 `./`
    - 可以省略后缀名
2. 在Node中，没有全局作用域，只有模块作用域
    - 外部访问不到内部
    - 内部也访问不到外部
    - 默认都是封闭的
3. 模块之间的通信（有时我们加载文件模块的目的不是为了简简单单的执行里面的代码而已，更重要是调用其中的方法！）
    - 导出函数或者变量 (exports)
        ```js
            exports.add = (a,b) => {
                return a + b;
            };

            exports.sub = (a,b)=>{
                return a - b;
            }
        ```
    - 导入调用
        ```js
            var c = require("./b")

            console.log(c.add(10,2))
            console.log('---------------------------------')
            console.log(c.sub(10,9));
        ```
> 将需要导出的内容挂载到`exports`上，这样其他模块文件便可以在导入该模块之后调用该`exports`上的内容！






### <a name="IP地址和端口号">IP地址和端口号</a>


- IP地址用来定位计算机
- 端口号用来定位具体的**应用程序**
- 一切需要联网通信的软件都会占用一个端口号
- 端口号的范围从0-65536之间
- 在计算机中有一些默认端口号，最好不要去使用
    - 例如http服务的80端口
- 我们在开发过程中使用一些简单好记的就可以了，例如3000,5000等没什么含义的




### <a name="代码风格">代码风格</a>


[代码风格指南 Javascript Standard Style](https://standardjs.com/rules.html)


**更严谨的javascript代码风格(中文版)**

[javascript-style-guid](https://github.com/sivan/javascript-style-guide/blob/master/es5/README.md)

> 当采用无分号代码风格时，需要注意：

    1. (
    2. [
    3. `
> 如果是以上面三种符号开头的代码，需要在其前面补一个`;`,以避免一些语法上的错误！





-----




###  <a name="模板引擎">模板引擎</a>

- art-template
> art-template 不仅可以在浏览器使用，也可以在 node 中使用

**安装**

`npm install atr-template --save`


**在HTML中使用**

```html
    <script src="node_modules/art-template/lib/template-web.js"></script>
    <script type="text/template" id="tpl">
        <h1 class="title">hello {{ name }}</h1>
    </script>
    <script>
        var ret = template('tpl',{
            name:'Jack'
        })

        window.onload = () => {
            document.getElementById('app').innerHTML = ret;
        }
    </script>
```

**也可以将整个`<!DOCTYPE html>`设置在整个模板中**

```html
<script src="node_modules/art-template/lib/template-web.js"></script>
<script type="text/template" id="tpl">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<style>
    .title{
        color: red;
    }
</style>
<body>
    <h1 class="title">hello {{ name }}</h1>
</body>
</html>
    </script>
    <script>
    var ret = template('tpl', {
        name: 'Jack'
    })

    console.log(ret)
    document.documentElement.innerHTML = ret;
</script>
```


#### <a name="在Node中使用`art-template`模板引擎">在Node中使用 `art-template` 模板引擎</a>

> 模板引擎起先诞生于服务器领域，后来才发展到了前端

1. 安装
2. 在使用的文件模块中加载 `art-template`
    ```js
        var template = require('art-template')
    ```
3. 查文档，使用模板引擎API

**一个栗子**

```js
var template = require('art-template')

var ret = template.render('Hello {{ name }}',{
    name:"Jack!"
});

console.log(ret)
```





<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


### <a name="Express">Express</a>

> 原生的http模块在某些方面表现不足以应对我们的开发需求，所以我们就需要使用框架来加快我们的开发效率,框架的目的就是提高效率，让我们的代码高度统一！

[Express 官网](http://expressjs.com/)


**demo**
```js
app.get('/',(req,res)=>{
    res.send('Hello express!')
})
```

**公开指定目录**

```js
app.use('/public/', express.static('./public/'))
```



#### <a name="修改完代码自动重启">修改完代码自动重启</a>

> `nodemon` 是一个第三方命令行工具，可以解决频繁修改代码重启服务器的问题！

**`nodemon`是一个基于Node.js开发的第三方命令行工具，需要独立安装:**

`npm install --global nodemon`

**使用:**

```js
node app.js 

# now usage!
nodemon app.js
```

> 通过`nodemon app.js` 启动的服务，则它会监视你的文件变化，当文件发生变化的时候，它会自动重启服务器！


#### <a name="服务端解析客户端POST数据">服务端解析客户端POST数据</a>

> 在`Express` 中没有提供获取表单POST请求体的API，这里我们需要使用一个第三方包：`body-parser`

**Node.js 中间件有提供这个包**

安装：
`npm install body-parser --save`

配置：
```js
var express = require('express')
// 引包
var bodyParser = require('body-parser')

var app = express()

// 配置 body-parser
// 只要加入这个配置，则在 req 请求对象上会多出一个属性：body
// 也就是说就可以直接通过 req.body 来获取表单 POST 请求体数据了
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(function(req,res){
    res.setHeader('Content-Type','text/plain')
    res.write('你的POST数据是：')

    // 通过 req.body 获取 POST 数据
    res.end(JSON.stringify(req.body,null,2))
})

```


####  <a name="Express路由模块的提取">Express路由模块的提取</a>


 > 将路由统一提取到 `Router.js` 中

 ```js
var fs = require('fs') // 导入各个路由需要用到的模块

var express = require('express')

// 1. 创建一个路由实例
var router = express.Router()

// 2. 把路由都挂载到 router 路由容器中

router.get('/students', function(req,res){

})

router.get('/students/new', function(req,res){

})
/// ...

// 3. 把 router 导出
module.exports = router
 ```


**把路由容器挂载到 app 服务中**

```js
// 引入
var router = require('./router') 
// 挂载
app.use(router)
```


**`app.js`入口模块**

职责：
1. 创建服务
2. 做一些服务相关的配置
    - 模板引擎
    - body-parser 解析表单 post 请求体
    - 提供静态资源服务
3. 挂载路由
4. 监听端口启动服务


**`router.js` 路由模块**

职责：
1. 处理路由
2. 根据不同的请求方法+请求路径设置具体的请求函数 


> 模块职责尽可能要**单一**







###  <a name="MongoDB">MongoDB</a>

[MongoDB 菜鸟教程](http://www.runoob.com/mongodb/mongodb-tutorial.html)

1. 关系型数据库与非关系型数据库

> 表与表之间是存在关系的

- 关系型数据库
    - 需要通过`sql`语言来进行查询
    - 需要设计表结构
    - 支持数据表约束
        - 唯一的
        - 主键
        - 默认值
        - 非空
- 非关系型数据库则非常灵活
    - 键值对
- MongoDB是非关系型数据库中最像关系型数据库的
    - 数据库 -> 数据库
    - 数据表 -> 集合（数组）
    - 表记录 -> (文档对象)
- MongoDB 不需要设计表结构
也就是说可以任意往里面存数据，没有结构性这么一说    


#### 连接和退出数据库

连接：

```js
# mongodb 默认使用执行 mongod 命令所处盘符根目录下的 /data/db 作为自己的数据库存储目录
# 所以在第一次执行该命令之前自己手动新建一个 /data/db

mongod
```

如果想要修改默认的数据存储目录，可以：
```js
mongod --dbpath=数据存储目录路径
```

停止：
```js
在开启服务的控制台，直接 Ctrl+c 即可停止
或者直接关闭开启服务的控制台也可以
```



### <a name="在Node.js中操作Mongodb">在 Node.js 中操作 Mongodb</a>

使用官方的 `Mongodb` 包来操作

[node-mongodb-native](https://github.com/mongodb/node-mongodb-native)

使用第三方 Mongoose 来操作 MongoDB 数据库

第三方包： `mongoose` 基于 MongoDB 官方的 `MongoDB` 包再一次做了封装

[mongoose](https://mongoosejs.com/)

> 好像被墙了

安装：`npm i mongoose`

使用：插入一条数据

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```


#### Mongoose 使用方法

设计表结构：
**约束**
> 约束的目的是为了保证数据的完整性，不要有脏数据

```js
const blogSchema = new Schema({
    title:String,
    author:String,
    body:String,
    comments:[{ body:String, date:Date }],
    date:{ type:Date,default:Date.now },
    hidden: Boolean,
    meta: {
        votes:Number,
        favs:Number
    }
})
```





##### 初始化一个表结构

```js
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
```

##### 新增数据

```js
admin.save((err,ret)=>{
    if (err){
        console.log('保存失败！')
    }else{
        console.log('保存成功！')
        console.log(ret)
    }
})
```


##### 查询数据

```js
User.find((err,ret)=>{
    if (err){
        console.log("查询失败！")
    }else{
        console.log(ret)
    }
})
```

##### 按条件查询数据

```js
User.find({
    password:'123456'
},(err,ret)=>{
    if (err){
        console.log("查询失败！")
    }else{
        console.log(ret)
    }
})
```



##### 删除数据

```js
User.remove({
    username:'amdin'
},(err,ret)=>{
    if (err){
        console.log('删除失败！')
    }else{
        console.log('删除成功！')
        console.log(ret)
    }
})
```


##### 更新数据

```js
User.findByIdAndUpdate('5c1511d693d7073bc84cf8c6',{
    password:'321'
},(err,ret)=>{
    if (err){
        console.log('更新失败！')
    }else{
        console.log('更新成功！')
    }
})
```



















###  <a name="CRUD增删改查">CRUD增删改查</a>




















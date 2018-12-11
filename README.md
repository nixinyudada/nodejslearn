# 学习 node js 的第一天


- 初识 Node.js
    - <a href="#什么是Node.js">什么是Node.js?</a>
    - <a href="#Node.js能做什么">Node.js能做什么?</a>
    - <a href="#学习资源">学习资源</a>
    - <a href="#学习任务">学习任务</a>

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
    - <s>BOM、DOM</s>
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







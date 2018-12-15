var http = require('http')

// 使用 http.createServer() 方法创建一个Web服务器，它会返回一个Server实例

var server = http.createServer()

// 使用服务器提供数据的服务
// 发请求
// 接受请求
// 处理请求
// 给个反馈（发送响应）


// 注册 request 请求事件
// 当客户端请求过来，就会触发服务器的 request 请求事件，然后执行第二个参数，回调处理
// request, response
server.on('request',(request,response)=>{
  response.setHeader('Content-Type','text/plain;charset=utf-8');
  console.log('收到客户端的请求了！')
  console.log('请求路径：' + request.url)  

  // 响应 response
  // write 可以使用多次，但是最后一定要使用 end 来结束响应
  response.write("Hello!")
  response.write("需要 “end”!")
  response.end();
})

// 绑定端口号，启动服务器
server.listen(3000,()=>{
    console.log('服务器启动成功！请通过 http://127.0.0.1:3000 进行访问！')
    
  });
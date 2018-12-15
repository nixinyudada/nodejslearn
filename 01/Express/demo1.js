const mongoose = require('mongoose')

// 连接 MongoDB 数据库
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true});

// 创建一个模型
// 就是在设计数据库
// MongoDB 是动态的，非常灵活，只需要在代码中设计你的数据库就可以了
// Mongoose 这个包就可以让你设计编写过程变得非常的简单
const Cat = mongoose.model('Cat', { name: String });



for(let i = 0;i < 10;i++){

// 实例化一个 Cat
const kitty = new Cat({ name: 'Zildjian' + i })

// 持久化保存 kitty 实例
kitty.save().then(() => console.log('meow!'))

}

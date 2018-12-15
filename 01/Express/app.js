var express = require('express')

var app = express()

app.use('/public/', express.static('./public/'))

app.get('/',(req,res)=>{
    res.send('Hello express!!')
})

app.listen(3000,()=>{
    console.log('app is running at port 3000.')
})
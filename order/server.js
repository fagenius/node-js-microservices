const express = require('express');
const app = express();

const port = 8081;

app.get('/order-list',(req,res)=>{
    let response = {
        data:{
            item:[
                {
                    id:1,name:'order 1'
                },
                {
                    id:2,name:'order 2'
                }
            ]
        }
    }
    res.status(200).json(response)
})

//http://localhost:9001/order/
app.get('/',(req,res)=>{
    res.status(200).json({message:"Order called"})
})

app.listen(port,()=>{
    console.log(`Oder Service is listening at htto://localhost:${port}`)
})
const express = require('express');
const app = express();

const port = 8082;

app.get('/payment-list',(req,res)=>{
    let response = {
        data:{
            item:[
                {
                    id:1,name:'payment 1'
                },
                {
                    id:2,name:'payment 2'
                }
            ]
        }
    }
    res.status(200).json(response)
})

//http://localhost:8082/order/
app.get('/',(req,res)=>{
    res.status(200).json({message:"Payment called"})
})

app.post('/add',(req,res)=>{
    res.status(200).json({message:"Add payment called"})
})

app.listen(port,()=>{
    console.log(`Payment Service is listening at htto://localhost:${port}`)
})
const gateway = require('fast-gateway');
const port = 9001;

const checkAuth = (req, res, next)=>{
    if(req.headers.token && req.headers.token != ''){
       next(); 
    }else{
        res.setHeader('Content-type', 'application/json');
        res.statusCode = 401;
        res.end(JSON.stringify({status:401, message:'Authentication failed'}))
    }  
}

// Accéder à l'API Order par:
// http://localhost:9001/order/order-list
// Accéder à l'API Payment par:
// http://localhost:9001/payment/payment-list
const server = gateway({
    middlewares:[checkAuth],
    routes:[
        {
            prefix: '/order',
            target: 'http://localhost:8081/',
            hooks: {
                // async onRequest (req, res) {
                
                // },
                // onResponse (req, res, stream) {  
                 
                // }          
              }
        },
        {
            prefix: '/payment',
            target: 'http://localhost:8082/',
            // middlewares:[checkAuth],
            methods: ['GET','POST'],
            hooks: {
                // async onRequest (req, res) {
                
                // },
                // onResponse (req, res, stream) {  
                 
                // }          
              }
        }
    ]
})

server.get('/mytesting',(req,resp)=>resp.send('Yes called gateway'))
server.start(port).then(server=>{
    console.log(`Api Gateway is running 9001 port`)
})
const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Tarun';
const addRout = require('./route/router');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');
const port = process.env.express||5000;
var conn = express();

mongoose.connect(url).then((res)=>{
 
     try{
        console.log('connected to database');
        

     }catch(err){
        console.log(err)
     }

});

conn.use(express.json());
conn.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
conn.use('/api',addRout);

conn.listen(port,()=>{
    try{
        console.log('server is listening on port', port);

    }catch(err){
        console.log(err)
    }
})


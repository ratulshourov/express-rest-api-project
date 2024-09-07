const express= require('express');
const  router  = require('./src/routes/api');

const app=new express();

app.use("/api/v1",router);

//undefined route

app.use("*",(req,res)=>{
res.status(404).json({
    'data':'undefined route'
});
});

module.exports=app;
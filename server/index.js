const express=require('express');
const { get } = require('mongoose');
const app=express();
const port=3200;
require('./db')

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
})
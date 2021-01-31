const express = require('express');
const products = require('./data/products.js')
const app=express();


app.get('/api/products',(req,res)=>{
  res.send(products);
 
})

app.get('/api/products/:id',(req,res)=>{
  const product = products.find(p=>p._id==req.params.id)
console.log(products)
  res.json(product)
})

app.listen(5000,console.log('Server started'));
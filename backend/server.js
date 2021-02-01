const express = require('express');
const products = require('./data/products.js')
const dotenv = require('dotenv');

dotenv.config()

const PORT = process.env.PORT || 5000;


const app=express();


app.get('/api/products',(req,res)=>{
  res.send(products);
 
})

app.get('/api/products/:id',(req,res)=>{
  const product = products.find(p=>p._id==req.params.id)
console.log(products)
  res.json(product)
})

app.listen(PORT,console.log(`Server started On ${PORT} in ${process.env.NODE_ENV}`));
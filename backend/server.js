const express = require('express');
const products = require('./data/products.js')
const connectDB = require('./config/db.js')
const productRoutes = require('./routes/productRoutes');
const dotenv = require('dotenv');

dotenv.config()

const PORT = process.env.PORT || 5000;

connectDB();

const app=express();

app.get('/',(req,res)=>{
	res.send("Hello ")
})
app.use('/api/products',productRoutes)


app.listen(PORT,console.log(`Server started On ${PORT} in ${process.env.NODE_ENV}`));
const express = require('express');

const connectDB = require('./config/db.js')
const productRoutes = require('./routes/productRoutes');
const dotenv = require('dotenv');

const {notFound,errorHandler} = require('./middleware/errorMiddleware.js')

dotenv.config()

const PORT = process.env.PORT || 5000;

connectDB();

const app=express();

app.get('/',(req,res)=>{
	res.send("Hello ")
})
app.use('/api/products',productRoutes)


app.use(notFound)

app.use(errorHandler)












app.listen(PORT,console.log(`Server started On ${PORT} in ${process.env.NODE_ENV}`));
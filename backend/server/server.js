const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const User = require('./models/user.model.js');
const Product = require('./models/product.model.js');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product.js')

app.use(bodyParser.json())

mongoose.connect('mongodb+srv://pankaj:Bodygaurd@2013@seoblog.inb3x.mongodb.net/SEOBlog?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})

var db = mongoose.connection;


var new_user = new User({
	name:"ankaj",
	email:"pankajchauhan189@gmail.com",
	password:"12345678",

})

new_user.save((err,result)=>{
	if(err) console.log(err)
		else console.log(result)
})


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use('/',productRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
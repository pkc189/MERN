const mongoose = require('mongoose');
const dotenv =require('dotenv')
dotenv.config()

const connectDB = async () =>{
	try{

const conn = await mongoose.connect("mongodb+srv://pankaj:Bodygaurd@2013@seoblog.inb3x.mongodb.net/SEOBlog?retryWrites=true&w=majority",{
	useUnifiedTopology:true,
	useNewUrlParser:true,
	createIndexes:true
	
})

console.log(`Mongodb connected : ${conn.connection.host}`)
	}
	catch(err){
  console.error(`Error : ${err.message}`)
	}
}

module.exports=connectDB;
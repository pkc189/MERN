const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	name:String,
	title:String,
	description:String,
    image:String,
    stock:Number,
    rating:Number,
    brand:String,
    reviews:Number,
    deliveryCharges:Number,
    price:Number,
    category:Number,
    deliveryBy:Date,
    instock:Boolean,
    postedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
})

module.exports = mongoose.model("Product",ProductSchema);
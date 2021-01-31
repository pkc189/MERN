const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

var Schema = mongoose.Schema;



const UserSchema = new Schema({
  name: String,
  email: String,
  password:String,
  admin:{
    type:Boolean,
    default:false},

});
UserSchema.pre("save",async function(next){
  const user = this;
  if(user.isModified('password')){
    user.password=await bcrypt.hash(user.password,10)
  }
  next();
})


module.exports = mongoose.model("User", UserSchema);

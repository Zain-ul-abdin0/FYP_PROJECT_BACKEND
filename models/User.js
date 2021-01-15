const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const userSchema= new Schema({
  name :{
    required:true,
      type:String,
      unique:true
  }  ,
  email:{
    
    required:true,
      type:String,
      unique:true
  },
  password:{
    
    required:true,
      type:String,
      unique:true
  },

},)

const User = mongoose.model('User',userSchema);
module.exports = User;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema=new Schema({
   username:{type:String, required:true, unique:true} ,
   password:{type:String, required:true},
   ccp:{type:String},
   codeCompany:{type:String},
   amount:{type:Number, },
   postalTax:{type:Number,},
});


module.exports =mongoose.model('User', UserSchema)
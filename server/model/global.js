const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Context = Schema(
    {
      ccp:{type:String,required:true},
      codeCommune:{type:String,required:true},
      amount:{type:Number, required:true},
      postalTax:{type:Number,required:true},
    }
);
module.exports = mongoose.model('Context', Context);
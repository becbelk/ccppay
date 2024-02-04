const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Context = Schema(
    {
      ccp:{type:string,required:true},
      fileName: {type:string,required:true},
    },
);
module.exports = mongoose.model('Context', ContextSchema);
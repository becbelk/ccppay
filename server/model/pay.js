const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const HeaderSchema = Schema({
    ccp: { type: String, required: true },
    totalAmount: { type: Number, default: 0 },
    personCount: { type: Number, default: 0 },
    date: { type: String, required: true },
});
const PersonSchema = Schema({
    name: { type: String, required: true },
    ccp: { type: String, required: true },
    amount: { type: Number, required: true }
})
const PaySchema = Schema(
    {
      header:{type:HeaderSchema,required:true},
        persons: [PersonSchema]
    },
);
module.exports = mongoose.model('Pay', PaySchema);
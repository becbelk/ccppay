const mongoose = require('mongoose');


const connectDb =
    () => {
        try {
            mongoose.set('strictQuery', false);
            const connection = mongoose.connect(process.env.DB_MONGO_URI);
            console.log('[config], dabase connected succesfully!');
        } catch (error) {
            console.log('[config], dabase connected failed!');
        }
    }
module.exports = connectDb
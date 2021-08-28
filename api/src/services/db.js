const mongoose = require('mongoose');
const { db } = require('../config');
module.exports.connectDB = () => {
    mongoose.connect(db, { useNewUrlParser: true });
    return mongoose.connection;
};
const mongoose = require("mongoose");
const logger = require("./logger");

module.exports = function () {
    // DB connection
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.CONNECTION_STRING)
        .then(() => logger.info('Connected to MongoDB'))
}
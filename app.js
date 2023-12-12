const express = require("express")
require('winston-mongodb');
require('dotenv/config')
const app = express();

const logger = require('./startup/logger')
require('./startup/routes')(app)
require('./startup/db')()

// start server
app.listen(process.env.PORT, () => {
    logger.info("Server is Successfully Running, & listening on port " + process.env.PORT)
});

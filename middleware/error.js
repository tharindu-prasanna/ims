const logger = require("../startup/logger");
module.exports = function (err, req, res, next) {
    logger.error(err)
    console.log(err)
    res.status(500).json({success: false, message: 'Something went wrong. Please try again later.'})
}

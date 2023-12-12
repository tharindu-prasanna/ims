const winston = require("winston")
require('express-async-errors')

const logFormat = winston.format.printf(({level, stack, message, timestamp}) => {
    return `${timestamp} ${level}: ${stack || message}`;
});

const logger = winston.createLogger({
    // level: 'error',
    format: winston.format.combine(
        winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        winston.format.errors({stack: true}),
        logFormat
    ),
    transports: [new winston.transports.File({filename: './logs/logs.log', level: 'info'})],
    exceptionHandlers: [new winston.transports.File({filename: './logs/exceptions.log'})],
    rejectionHandlers: [new winston.transports.File({filename: './logs/rejections.log'})]
})

logger.add(new winston.transports.MongoDB({
    level: "info",
    db: process.env.CONNECTION_STRING,
    options: {useUnifiedTopology: true}
}));

module.exports = logger

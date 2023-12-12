const jwt = require('jsonwebtoken')
const {decryptData} = require("../helpers/functions");

module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).send('Access denied. token not provided.');
    }

    const decryptedToken = decryptData(token)

    jwt.verify(decryptedToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(400).send('Invalid token.');
        } else {
            const now = Date.now().valueOf() / 1000; // Convert to seconds
            if (decoded.exp < now) {
                return res.status(400).send('Token expired.');
            }
            req.user = decoded
            next();
        }
    });
}

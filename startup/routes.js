const express = require("express");
const cors = require("cors");
const path = require("path");
// const helmet = require("helmet");
const error = require("../middleware/error");
const bannerRouter = require("../routes/banner");
const contactsRouter = require("../routes/contacts");
const instructionsRouter = require("../routes/instructions");
const designationRouter = require("../routes/designations");
const organizationRouter = require("../routes/organizations");
const branchRouter = require("../routes/branches");
const investigationRouter = require("../routes/investigations");
const dashboardRouter = require("../routes/dashboard");
const logsRouter = require("../routes/logs");
const api = process.env.API_URL

module.exports = function (app) {
    // Middleware
    app.use((req, res, next) => {
        res.setHeader('Content-Security-Policy', "default-src 'self' 'unsafe-inline' https://msmsenterpriseapi.mobitel.lk/EnterpriseSMSV3/esmsproxyURL.php")
        res.setHeader('Cross-Origin-Embedder-Policy', 'unsafe-none');
        res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
        res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
        res.setHeader('Cross-Origin-Resource-Sharing', 'anonymous');
        next();
    });

    app.use('/', express.static(path.join(__dirname, '../ims')))  // Server only
    app.use(express.static(path.join(__dirname, '../public')))
    app.use(express.json());
    app.use(cors())
    app.options('*', cors())
    // app.use(helmet());                                                  // Server only

    // routes middleware
    app.use(`${api}/banner`, bannerRouter)
    app.use(`${api}/contacts`, contactsRouter)
    app.use(`${api}/instructions`, instructionsRouter)
    app.use(`${api}/designations`, designationRouter)
    app.use(`${api}/organizations`, organizationRouter)
    app.use(`${api}/branches`, branchRouter)
    app.use(`${api}/investigations`, investigationRouter)
    app.use(`${api}/dashboard`, dashboardRouter)
    app.use(`${api}/logs`, logsRouter)
    // app.use('*', (req, res) => {
    //     res.status(404).send('Invalid url')
    // })

    // Error handling middleware
    app.use(error)

    app.use((req, res, next) => {                                       // Server only
        res.sendFile(path.join(__dirname, '../ims', 'index.html'))   // Server only
    })                                                                  // Server only
}

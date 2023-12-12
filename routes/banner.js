const express = require('express')
const router = express.Router()
const {getBanner} = require("../controllers/banner.controller");
// const nodemailer = require('nodemailer');

router.get('/', getBanner)

// router.get('/sendmail', async (req, res) => {
//
// // Create a Nodemailer transporter using Outlook SMTP settings
//     const transporter = nodemailer.createTransport({
//         host: 'smtp-mail.outlook.com', // Outlook SMTP server
//         port: 587, // Port for TLS/STARTTLS
//         secure: false, // Set to true if using SSL
//         auth: {
//             user: 'your_outlook_email@example.com', // Your Outlook email address
//             pass: 'your_outlook_password', // Your Outlook password
//         },
//     });
//
// // Email options
//     const mailOptions = {
//         from: 'your_outlook_email@example.com',
//         to: 'recipient@example.com',
//         subject: 'Test Email',
//         text: 'Hello, this is a test email from Nodemailer!',
//     };
//
// // Send email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.error('Error occurred:', error.message);
//         }
//         console.log('Email sent:', info.response);
//     });
//
// })

module.exports = router;

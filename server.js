const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
const { underline } = require('colors');

dotenv.config({ path: './config/config.env'})

const app = express();
app.use(express.json());

const port  = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}...`.cyan.bold));



// @desc    Send a contact message request
// @route   POST /api/question/
// @access  Public
app.post('/send', (req, res) =>{

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your.email.address',
                pass: 'your.email.password'
            }
        });
        
        let mailOptions = {
            from: 'your.email.address',
            to: 'to.email.address',
            subject: 'sending email using Node.js',
            html: '<h1>Welcome to quizz app</h1><p>This is a test email with HTML markup</p>'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return res.status(400).send(error.response);
            } else {
                return res.status(200).send(`Email sent: ${info.response}` )
            }
        });
});

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
// @route   POST /send
// @access  Public
app.post('/send', (req, res) =>{

        let transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: {
                user: 'your.gmail.address',
                pass: 'gmail.password'
            }
        });
        
        let mailOptions = {
            from: `${req.body.mail}`,
            to: 'whatever.email.address',
            subject: `New customer request`,
            html:   `<h1>Enquiry from:  ${req.body.name}</h1>
                    <h3>Contact: ${req.body.mail}</h3>
                    <p>${req.body.message}</p>`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return res.status(500).send(error.response);
            } else {
                return res.status(200).send(`Email sent: ${info.response}` )
            }
        });
});

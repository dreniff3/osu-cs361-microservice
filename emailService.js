import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();

// middleware for parsing JSON bodies
app.use(bodyParser.json());

// endpoint for receiving purchase notifications
app.post('/api/sendEmail', (req, res) => {
    const { userEmail, purchaseDetails } = req.body;

    // create SMTP transporter object per nodemailer documentation
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'sender@example.com', // replace with sender address
            pass: 'example_password' // replace with generated password
        },
    });
});

// construct email
const mailOptions = {
    from: 'sender@example.com', // replace with sender address
    to: userEmail, // email recipient
    subject: 'Receipt for your purchase', // email subject
    html: `<p>Thank you for your purchase!</p>
           <p>Details: ${purchaseDetails}</p>` // email body
};
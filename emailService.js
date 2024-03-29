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

    // construct email
    const mailOptions = {
        from: 'sender@example.com', // replace with sender address
        to: userEmail, // email recipient
        subject: 'Receipt for your purchase', // email subject
        html: `<p>Thank you for your purchase!</p>
            <p>Details: ${purchaseDetails}</p>` // email body
    };

    // send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred: ', error);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent: ', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
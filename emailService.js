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
            user: 'sender@example.com',
            pass: 'example_password'
        },
    });
});
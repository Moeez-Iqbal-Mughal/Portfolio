import Contact from '../../model/Contact/index.js';
import nodemailer from 'nodemailer';
import PortfolioTemplate from '../../utils/PortfolioTemplate.js'; 
import dotenv from 'dotenv'

const transporter = nodemailer.createTransport({
    host: 'in-v3.mailjet.com',
    secure: false,
    port: 587,
    auth: {
        user: process.env.EMAIL_CODE,
        pass: process.env.EMAIL_PASS,

    },
});

const createContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Save contact to DB
        const contact = await Contact.create({ name, email, subject, message });

        // Log sender
        console.log("Contact form submitted by:", email);

        // Use your custom template
        const emailContent = PortfolioTemplate({
            name,
            email,
            subject,
            message,
        });

        // Mail options
        const mailOptions = {
            from: `Moeez's Portfolio <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_SENT, 
            subject: `Someone Contact through Portfolio for: ${subject}`,
            html: emailContent,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return res.status(201).json(contact);
    } catch (error) {
        console.error('Error submitting form:', error);
        return res.status(500).json({ error: 'An error occurred while submitting the form.' });
    }
};

export default createContact;

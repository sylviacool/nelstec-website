const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    console.log("Received contact form submission:", { name, email });
    console.log("Environment check:", {
        EMAIL_USER: process.env.EMAIL_USER ? "✓" : "✗",
        EMAIL_PASS: process.env.EMAIL_PASS ? "✓" : "✗",
        EMAIL_RECEIVER: process.env.EMAIL_RECEIVER ? "✓" : "✗",
    });

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER, // Must match the authenticated user
            to: process.env.EMAIL_RECEIVER,
            subject: "New Contact Form Submission - NELSTEC Website",
            text: `You have received a new contact form submission from your website.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <p style="color: #666; margin-bottom: 20px;">
                        You have received a new message from your NELSTEC website contact form.
                    </p>
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="margin: 10px 0;"><strong>Message:</strong></p>
                        <div style="background-color: white; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px;">
                            ${message.replace(/\n/g, "<br>")}
                        </div>
                    </div>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
                    <p style="color: #999; font-size: 12px; text-align: center;">
                        This message was sent from the contact form on your NELSTEC website.
                    </p>
                </div>
            `,
        };

        console.log("Attempting to send email...");
        const info = await transporter.sendMail(mailOptions);
        console.log("✓ Email sent successfully! Message ID:", info.messageId);

        res.status(200).json({ message: "Message sent successfully!" });
    } catch (err) {
        console.error("✗ Error sending email:", {
            message: err.message,
            code: err.code,
            command: err.command,
        });
        res.status(500).json({
            message: "Failed to send message",
            error: err.message,
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

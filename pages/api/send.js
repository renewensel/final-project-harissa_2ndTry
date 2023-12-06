// pages/api/sendEmail.js
import { Resend } from "resend";
import { EmailTemplate } from "../../components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
    try {
        if (req.method === "POST") {
            // Assuming you are sending JSON data from the form
            const { name, email, message } = req.body;

            // Use the form data in your email template
            const emailTemplate = EmailTemplate({ firstName: name });

            const data = await resend.emails.send({
                from: "someone",
                to: ["testi@trash-mail.com"],
                subject: "Hello world",
                react: emailTemplate,
            });

            res.status(200).json(data);
        } else {
            res.status(405).json({ message: "Method Not Allowed" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


import { createTransport } from "nodemailer";

export const mailSender = async (email, subject, html) => {
    const transporter = createTransport({
        host: "smtpout.secureserver.net",
        port: 465,
        secure: true,
        auth: {
            user: "info@auxibleindia.com",
            pass: "info@1234"
        },
        from: "info@auxibleindia.com",
        tls: {
            rejectUnauthorized: false,
        },
    });
    await transporter.sendMail({
        from: 'Auxible India" <info@auxibleindia.com>',
        to: `${email}`,
        subject: subject,
        html: `${html}`
    });
};



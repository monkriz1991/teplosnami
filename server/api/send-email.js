import nodemailer from "nodemailer";
import { defineEventHandler, readBody, H3Event } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: Number(config.smtpPort) === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Форма сайта" <${config.smtpUser}>`,
      to: config.smtpTo,
      subject: "Новая заявка с сайта",
      html: `
        <h2>Данные заявки:</h2>
        <p><strong>Контакт:</strong> ${body.contact}</p>
        <p><strong>Телефон:</strong> ${body.phone}</p>
        <p><strong>Описание:</strong> ${body.description}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Ошибка отправки:", error);
    return { success: false, error: "Ошибка отправки письма" };
  }
});

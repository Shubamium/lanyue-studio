"use server";
import { transformSync } from "next/dist/build/swc";
import nodemailer, { TransportOptions } from "nodemailer";
import Email from "../components/Email";
import { render } from "@react-email/components";

const mail = process.env.SMTP_MAIL;
const pass = process.env.SMTP_PASS;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "587",
  auth: {
    user: mail,
    pass: pass,
  },
} as TransportOptions);

export async function SendMail(data: {
  username: string;
  email: string;
  handle: string;
  message: string;
}) {
  const emailHtml = await render(Email(data));

  const info = await transporter.sendMail({
    from: "Lanyue Studio Website <vicnet.video@gmail.com>",
    to: "contact@lanyue.studio",
    subject: "New Website Form Submission!",
    // text: `"Test Message"`,
    html: emailHtml,
    cc: ["shuba.dev313@gmail.com"],
  });
  console.log(info);
}

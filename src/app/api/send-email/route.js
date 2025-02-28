import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Carregar variáveis de ambiente
import dotenv from "dotenv";
dotenv.config();

export async function POST(req) {
  try {
    const { name, email, tel, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contato Site Marmoraria" <${process.env.EMAIL_USER}>`,
      to: "vendas.marmorariafpolis@gmail.com",
      subject: "Novo Contato pelo Formulário do Site",
      html: `
        <div style="background-color:#1F2937; color:#ffffff; padding:20px; font-family:sans-serif;">
          <h2>Novo Contato pelo Formulário do Site</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${tel}</p>
          <p><strong>Mensagem:</strong> ${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json({ error: "Erro ao enviar o e-mail" }, { status: 500 });
  }
}

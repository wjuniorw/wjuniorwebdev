// import { Resend } from 'resend'
import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Precisa gerar uma "senha de app"
      },
    })
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: 'Novo Contato pelo Site',
      text: ` "${name}" <${email}> \n message: ${message}`,
    })

    return NextResponse.json({ message: 'Mensagem enviada com sucesso!' })
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json({ error: 'Erro ao enviar mensagem' }, { status: 500 })
  }
}

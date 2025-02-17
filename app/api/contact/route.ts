import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const contactName = process.env.EMAIL_CONTACT_NAME
const emailContact = process.env.EMAIL_CONTACT!
const sub = process.env.EMAIL_SUBJECT!

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }
    // Aqui você pode integrar com um serviço de email, como Nodemailer ou Resend
    const data = await resend.emails.send({
      subject: sub,
      replyTo: email,
      to: [emailContact],
      from: `${contactName} <${emailContact}>`,
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
    })

    return NextResponse.json({ message: 'Mensagem enviada com sucesso!' })
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json({ error: 'Erro ao enviar mensagem' }, { status: 500 })
  }
}

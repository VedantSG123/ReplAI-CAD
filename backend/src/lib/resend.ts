import { Resend } from 'resend'

let resendInstance: Resend | null = null

const getResendInstance = () => {
  if (!resendInstance) {
    resendInstance = new Resend(process.env.RESEND_API_KEY)
  }
  return resendInstance
}

export const sendAuthEmail = async (
  email: string,
  type: 'signup' | 'reset',
  link: string,
) => {
  const subject =
    type === 'signup'
      ? 'Welcome to ReplAI CAD!'
      : 'Reset Your ReplAI CAD Password'

  const linkText = type === 'signup' ? 'Sign Up' : 'Reset Password'

  const html = `
    <div style="font-family: sans-serif; text-align: center; padding: 20px;">
      <h2>${subject}</h2>
      <p>Click the button below to ${linkText.toLowerCase()}.</p>
      <a href="${link}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 10px;">
        ${linkText}
      </a>
      <p style="margin-top: 20px; font-size: 12px; color: #888;">If you did not request this email, you can safely ignore it.</p>
    </div>
  `

  const resend = getResendInstance()

  await resend.emails.send({
    from: 'ReplAI CAD <onboarding@resend.dev>',
    to: email,
    subject,
    html,
  })
}

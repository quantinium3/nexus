import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { to, subject, text } = await request.json();
    
    const { data, error } = await resend.emails.send({
      from: 'Nexus <onboarding@resend.dev>',
      to: ['himslash2005@gmail.com'], 
      subject: subject,
      text: text,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error('API error:', error);
    return Response.json({ error }, { status: 500 });
  }
}
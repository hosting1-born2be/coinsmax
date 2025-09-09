'use server';

import sgMail from '@sendgrid/mail';

import { ADMIN_EMAIL, FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

import type {
  ContactFormSchema,
  ShortContactFormSchema,
} from '../model/form.schema';

export const submitContactForm = async (
  data: ContactFormSchema | ShortContactFormSchema,
) => {
  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    const { email, fullName, message, company, phone } =
      data as ContactFormSchema;

    const msg = {
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      subject: `New Contact Request`,
      html: `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company ?? 'N/A'}</p>
      <p><strong>Phone:</strong> ${phone ?? 'N/A'}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    };

    await sgMail.send(msg);

    return { success: true };
  } catch (err) {
    console.error(err);

    return { success: false };
  }
};

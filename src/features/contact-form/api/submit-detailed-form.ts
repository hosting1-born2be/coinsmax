'use server';

import sgMail from '@sendgrid/mail';

import { ADMIN_EMAIL, FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

import type { DetailedContactFormSchema } from '../model/form.schema';

export const submitDetailedForm = async ({
  email,
  firstName,
  lastName,
  phone,
  projectLink,
  projectName,
  projectOverview,
  projectType,
}: Omit<DetailedContactFormSchema, 'isAgree'>) => {
  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      subject: `New Contact Request`,
      html: `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Project Name:</strong> ${projectName}</p>
      <p><strong>Project Link:</strong> ${projectLink}</p>
      <p><strong>Project Overview:</strong> ${projectOverview}</p>
      <p><strong>Project Type:</strong> ${projectType}</p>
    `,
    };

    await sgMail.send(msg);

    return { success: true };
  } catch (err) {
    console.error(err);

    return { success: false };
  }
};

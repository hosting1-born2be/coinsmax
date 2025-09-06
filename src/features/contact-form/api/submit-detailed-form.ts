'use server';

import { google } from 'googleapis';

import { makeEmailBody } from '@/shared/lib/utils/make-email-body';

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
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.EMAIL_CLIENT_ID!,
      process.env.EMAIL_CLIENT_SECRET!,
      'https://developers.google.com/oauthplayground',
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN!,
    });

    const accessToken = await oauth2Client.getAccessToken();
    if (!accessToken.token) {
      throw new Error('Failed to generate access token.');
    }

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    const adminEmailBody = makeEmailBody(
      process.env.EMAIL_USER || '',
      process.env.EMAIL_USER || '',
      'New Request Received',
      `
      <p><strong>Company Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${projectOverview}</p>
      <p><strong>Project Name:</strong> ${projectName}</p>
      <p><strong>Project Link:</strong> ${projectLink}</p>
      <p><strong>Project Type:</strong> ${projectType}</p>
      <p><strong>Phone:</strong> ${phone}</p>
    `,
    );

    await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: adminEmailBody },
    });

    return { success: true };
  } catch (err) {
    console.error(err);

    return { success: false };
  }
};

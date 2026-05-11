'use server';

import sgMail from '@sendgrid/mail';

import { ADMIN_EMAIL, FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

import type { WaitlistFormSchema } from '../model/waitlist.schema';

export type SubmitWaitlistResult =
  | { success: true }
  | { success: false; error: 'duplicate' | 'server' };

export const submitWaitlistForm = async (
  data: WaitlistFormSchema,
): Promise<SubmitWaitlistResult> => {
  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      subject: 'New Waitlist Signup',
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Email:</strong> ${data.email}</p>
      `,
    };

    await sgMail.send(msg);

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, error: 'server' };
  }
};

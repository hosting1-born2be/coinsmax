'use server';

import sgMail from '@sendgrid/mail';

import { ADMIN_EMAIL, FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';
import {
  buildEmailTemplate,
  emailParagraph,
} from '@/shared/lib/email/buildEmailTemplate';

import type { WaitlistFormSchema } from '../model/waitlist.schema';

export type SubmitWaitlistResult =
  | { success: true }
  | { success: false; error: 'duplicate' | 'server' };

const buildSubscriberConfirmationHtml = () => {
  const body = [
    emailParagraph('Thank you for subscribing to Coinsmax news and updates.'),
    emailParagraph(
      'Your email address has been successfully added to our newsletter list. You will now receive platform updates, announcements, product news, and other important information from Coinsmax.',
    ),
    emailParagraph('Thank you for staying connected with us.'),
  ].join('\n');

  return buildEmailTemplate(body);
};

export const submitWaitlistForm = async (
  data: WaitlistFormSchema,
): Promise<SubmitWaitlistResult> => {
  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    const adminMsg = {
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      subject: 'New Waitlist Signup',
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Email:</strong> ${data.email}</p>
      `,
    };

    await sgMail.send(adminMsg);

    try {
      const subscriberMsg = {
        to: data.email,
        from: FROM_EMAIL,
        subject: 'Welcome to Coinsmax updates',
        html: buildSubscriberConfirmationHtml(),
      };

      await sgMail.send(subscriberMsg);
    } catch (confirmErr) {
      console.error(
        'Failed to send subscriber confirmation email',
        confirmErr,
      );
    }

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, error: 'server' };
  }
};

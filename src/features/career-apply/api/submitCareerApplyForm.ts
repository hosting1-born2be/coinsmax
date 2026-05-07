'use server';

import sgMail from '@sendgrid/mail';

import { ADMIN_EMAIL, FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

export type CareerApplyPayload = {
  positionTitle: string;
  name: string;
  email: string;
  links?: string;
  coinsmaxWhy?: string;
  coinsmaxFit?: string;
  currentLocation?: string;
  sponsorship?: 'yes' | 'no' | '';
  experienceAreas?: string[];
  experienceTools?: string[];
  experienceOther?: string;
};

export const submitCareerApplyForm = async (data: CareerApplyPayload) => {
  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      subject: `New Career Application: ${data.positionTitle}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Position:</strong> ${data.positionTitle}</p>
        <hr />
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Links:</strong> ${data.links || 'N/A'}</p>
        <hr />
        <p><strong>Why Coinsmax:</strong> ${data.coinsmaxWhy || 'N/A'}</p>
        <p><strong>Great fit:</strong> ${data.coinsmaxFit || 'N/A'}</p>
        <hr />
        <p><strong>Current location:</strong> ${data.currentLocation || 'N/A'}</p>
        <p><strong>Sponsorship required:</strong> ${data.sponsorship || 'N/A'}</p>
        <hr />
        <p><strong>Experience areas:</strong> ${(data.experienceAreas || []).join(', ') || 'N/A'}</p>
        <p><strong>Experience tools:</strong> ${(data.experienceTools || []).join(', ') || 'N/A'}</p>
        <p><strong>Other:</strong> ${data.experienceOther || 'N/A'}</p>
      `,
    };

    await sgMail.send(msg);

    return { success: true as const };
  } catch (err) {
    console.error(err);
    return { success: false as const };
  }
};


'use server';

import sgMail from '@sendgrid/mail';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { ADMIN_EMAIL, FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

const toString = (v: FormDataEntryValue | null) =>
  typeof v === 'string' ? v : '';

const toStringArray = (v: FormDataEntryValue | null) => {
  if (typeof v !== 'string' || !v) return [];
  try {
    const parsed = JSON.parse(v);
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
};

const buildApplicantConfirmationHtml = (positionTitle: string) => `
<table role="presentation" style="width:100%;background:#f4f4f6;padding:32px 0;font-family:Arial,Helvetica,sans-serif;color:#222;">
  <tr>
    <td align="center">
      <table role="presentation" style="width:100%;max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="padding:32px 32px 16px;text-align:center;">
            <img src="cid:logo" alt="Coinsmax" style="display:block;margin:0 auto;max-width:160px;height:auto;" />
            <p style="margin:16px 0 0;font-size:14px;letter-spacing:0.04em;color:#888;">Limitless Technologies</p>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 32px 32px;font-size:16px;line-height:1.6;color:#222;">
            <p style="margin:0 0 16px;">Hello,</p>
            <p style="margin:0 0 16px;">Thank you for applying for the position of <strong>${positionTitle}</strong> at Coinsmax.</p>
            <p style="margin:0 0 16px;">We confirm that we have successfully received your CV and application details. Our HR team will now review your submission carefully.</p>
            <p style="margin:0 0 16px;">Please note that the review process may take some time. Once the evaluation is completed, a member of our HR team will contact you regarding the next steps.</p>
            <p style="margin:0 0 24px;">Thank you for your interest in joining Coinsmax.</p>
            <p style="margin:0;">Best regards,<br/>Coinsmax HR Team</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`;

export const submitCareerApplyForm = async (formData: FormData) => {
  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    const positionTitle = toString(formData.get('positionTitle'));
    const name = toString(formData.get('name'));
    const email = toString(formData.get('email'));
    const links = toString(formData.get('links'));
    const coinsmaxWhy = toString(formData.get('coinsmaxWhy'));
    const coinsmaxFit = toString(formData.get('coinsmaxFit'));
    const currentLocation = toString(formData.get('currentLocation'));
    const sponsorship = toString(formData.get('sponsorship'));
    const experienceAreas = toStringArray(formData.get('experienceAreas'));
    const experienceTools = toStringArray(formData.get('experienceTools'));
    const experienceOther = toString(formData.get('experienceOther'));

    const cv = formData.get('cvFile');
    const cvFile = cv instanceof File ? cv : null;

    const attachments = [];
    if (cvFile) {
      const MAX_BYTES = 10 * 1024 * 1024;
      if (cvFile.size > MAX_BYTES) return { success: false as const };

      const buffer = Buffer.from(await cvFile.arrayBuffer());
      attachments.push({
        content: buffer.toString('base64'),
        filename: cvFile.name || 'cv',
        type: cvFile.type || 'application/octet-stream',
        disposition: 'attachment',
      });
    }

    const adminMsg = {
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      subject: `New Career Application: ${positionTitle}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Position:</strong> ${positionTitle}</p>
        <hr />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Links:</strong> ${links || 'N/A'}</p>
        <hr />
        <p><strong>Why Coinsmax:</strong> ${coinsmaxWhy || 'N/A'}</p>
        <p><strong>Great fit:</strong> ${coinsmaxFit || 'N/A'}</p>
        <hr />
        <p><strong>Current location:</strong> ${currentLocation || 'N/A'}</p>
        <p><strong>Sponsorship required:</strong> ${sponsorship || 'N/A'}</p>
        <hr />
        <p><strong>Experience areas:</strong> ${experienceAreas.join(', ') || 'N/A'}</p>
        <p><strong>Experience tools:</strong> ${experienceTools.join(', ') || 'N/A'}</p>
        <p><strong>Other:</strong> ${experienceOther || 'N/A'}</p>
      `,
      ...(attachments.length ? { attachments } : {}),
    };

    await sgMail.send(adminMsg);

    if (email) {
      try {
        const logoPath = path.join(process.cwd(), 'public', 'logo_email.png');
        const logoBuffer = await readFile(logoPath);

        const applicantMsg = {
          to: email,
          from: FROM_EMAIL,
          subject: 'Application received — Coinsmax',
          html: buildApplicantConfirmationHtml(positionTitle || 'Coinsmax'),
          attachments: [
            {
              content: logoBuffer.toString('base64'),
              filename: 'logo.png',
              type: 'image/png',
              disposition: 'inline',
              content_id: 'logo',
            },
          ],
        };

        await sgMail.send(applicantMsg);
      } catch (confirmErr) {
        console.error(
          'Failed to send applicant confirmation email',
          confirmErr,
        );
      }
    }

    return { success: true as const };
  } catch (err) {
    console.error(err);
    return { success: false as const };
  }
};

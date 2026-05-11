'use server';

import sgMail from '@sendgrid/mail';

import { ADMIN_EMAIL, FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';
import {
  buildEmailTemplate,
  emailParagraph,
} from '@/shared/lib/email/buildEmailTemplate';

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

const buildApplicantConfirmationHtml = (positionTitle: string) => {
  const body = positionTitle
    ? [
        emailParagraph(
          `Thank you for applying for the position of ${positionTitle} at Coinsmax.`,
        ),
        emailParagraph(
          'We confirm that we have successfully received your CV and application details. Our HR team will now review your submission carefully.',
        ),
        emailParagraph(
          'Please note that the review process may take some time. Once the evaluation is completed, a member of our HR team will contact you regarding the next steps.',
        ),
        emailParagraph('Thank you for your interest in joining Coinsmax.'),
      ].join('\n')
    : [
        emailParagraph('Thank you for submitting your open application to Coinsmax.'),
        emailParagraph(
          'We confirm that we have successfully received your CV and application details for the selected department. Our team will carefully review your profile and experience.',
        ),
        emailParagraph(
          'Please note that the evaluation process may take some time. If your background matches our current or upcoming opportunities, our HR team will contact you regarding the next steps.',
        ),
        emailParagraph('We appreciate your interest in joining Coinsmax.'),
      ].join('\n');

  return buildEmailTemplate(body);
};

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

    const adminLabel = positionTitle || 'General Inquiry';

    const adminMsg = {
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      subject: `New Career Application: ${adminLabel}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Position:</strong> ${adminLabel}</p>
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
        const applicantMsg = {
          to: email,
          from: FROM_EMAIL,
          subject: 'Application received — Coinsmax',
          html: buildApplicantConfirmationHtml(positionTitle),
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

'use server';

import sgMail from '@sendgrid/mail';

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

const buildApplicantConfirmationHtml = (positionTitle: string) => {
  const body = positionTitle
    ? `
                    <p style="font-size: 16px; font-weight:300; color: rgba(255,255,255,0.6); line-height: 1.25; display: block; margin-top: 0; margin-bottom: 20px;">Thank you for applying for the position of ${positionTitle} at Coinsmax.</p>
                    <p style="font-size: 16px; font-weight:300; color: rgba(255,255,255,0.6); line-height: 1.25; display: block; margin-top: 0; margin-bottom: 20px;">We confirm that we have successfully received your CV and application details. Our HR team will now review your submission carefully.</p>
                    <p style="font-size: 16px; font-weight:300; color: rgba(255,255,255,0.6); line-height: 1.25; display: block; margin-top: 0; margin-bottom: 20px;">Please note that the review process may take some time. Once the evaluation is completed, a member of our HR team will contact you regarding the next steps.</p>
                    <p style="font-size: 16px; font-weight:300; color: rgba(255,255,255,0.6); line-height: 1.25; display: block; margin-top: 0; margin-bottom: 20px;">Thank you for your interest in joining Coinsmax.</p>`
    : `
                    <p style="font-size: 16px; font-weight:300; color: rgba(255,255,255,0.6); line-height: 1.25; display: block; margin-top: 0; margin-bottom: 20px;">Thank you for submitting your open application to Coinsmax.</p>
                    <p style="font-size: 16px; font-weight:300; color: rgba(255,255,255,0.6); line-height: 1.25; display: block; margin-top: 0; margin-bottom: 20px;">We confirm that we have successfully received your CV and application details for the selected department. Our team will carefully review your profile and experience.</p>
                    <p style="font-size: 16px; font-weight:300; color: rgba(255,255,255,0.6); line-height: 1.25; display: block; margin-top: 0; margin-bottom: 20px;">Please note that the evaluation process may take some time. If your background matches our current or upcoming opportunities, our HR team will contact you regarding the next steps.</p>
                    <p style="font-size: 16px; font-weight:300; color: rgba(255,255,255,0.6); line-height: 1.25; display: block; margin-top: 0; margin-bottom: 20px;">We appreciate your interest in joining Coinsmax.</p>`;

  return `
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="640" style="background-color: #000; width: 640px;">
  <tr>
    <td>&nbsp;</td>
    <td class="container">
      <div class="header">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td align="center" style="padding-top: 24px;">
              <a href="https://coinsmax.io/">
                <img src="https://coinsmax.io/logo.svg" height="30" alt="Coinsmax" style="display:block;">
              </a>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p style="color: #B3B3B5; margin: 0; line-height: 1.25;">
                Limitless Technologies
              </p>
            </td>
          </tr>
        </table>
      </div>

      <div>
        <table role="presentation" class="main" style="background-color: #222222; padding: 16px; border-radius: 32px; margin: 40px 32px;">
          <tr>
            <td class="wrapper">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="font-size: 36px; color: #fff; line-height: 1.25; display: block; margin-bottom: 20px;">
                      Hello,
                    </p>
${body}
                    <p style="font-size: 20px; font-weight:300; color: #fff; line-height: 1.25; display: block; margin-top: 0; margin-bottom: 0;">Best regards,</p>
                    <p style="font-size: 20px; font-weight:300; color: #fff; line-height: 1.25; display: block; margin-top: 0; margin-bottom: 0;">Coinsmax HR Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <div class="footer">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td
                align="center"
                background="https://coinsmax.io/images/careers/see_role.png"
                style="
                  background-image: url('https://coinsmax.io/images/careers/see_role.png');
                  background-size: cover;
                  background-position: center;
                  background-repeat: no-repeat;
                  padding: 24px 0;
                  border-top-left-radius: 32px;
                  border-top-right-radius: 32px;
                "
              >
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td align="center">
                      <a href="https://coinsmax.io/">
                        <img
                          src="https://coinsmax.io/logo.svg"
                          height="30"
                          alt="Coinsmax"
                          style="display:block;"
                        >
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td align="center">
                      <p style="color:#B3B3B5; margin:0;">
                        Limitless Technologies
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </td>
    <td>&nbsp;</td>
  </tr>
</table>
`;
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

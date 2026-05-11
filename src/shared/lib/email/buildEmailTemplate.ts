export const buildEmailTemplate = (bodyParagraphsHtml: string) => `
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
${bodyParagraphsHtml}
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

export const emailParagraph = (text: string) =>
  `<p style="font-size: 16px; font-weight:300; color: rgba(255,255,255,0.6); line-height: 1.25; display: block; margin-top: 0; margin-bottom: 20px;">${text}</p>`;

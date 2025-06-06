import { NextResponse } from "next/server";

import { google } from "googleapis";

type OrderData = {
  companyName: string;
  contactName: string;
  email: string;
  message: string;
};

function makeBody(
  to: string,
  from: string,
  subject: string,
  message: string
): string {
  const emailLines = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    "",
    message,
  ];

  return Buffer.from(emailLines.join("\n"))
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const bodyJSON = (await request.json()) as OrderData;
    const { companyName, contactName, email, message } = bodyJSON;

    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.EMAIL_CLIENT_ID!,
      process.env.EMAIL_CLIENT_SECRET!,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN!,
    });

    const accessToken = await oauth2Client.getAccessToken();
    if (!accessToken.token) {
      throw new Error("Failed to generate access token.");
    }

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    const adminEmailBody = makeBody(
      process.env.EMAIL_USER || "",
      process.env.EMAIL_USER || "",
      "New Request Received",
      `
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Contact Name:</strong> ${contactName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    );

    await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw: adminEmailBody },
    });

    return NextResponse.json({ message: "Order email sent successfully." });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error sending order email:", errorMessage);
    return NextResponse.json(
      { message: "Failed to send order email.", error: errorMessage },
      { status: 500 }
    );
  }
}

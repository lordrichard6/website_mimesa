"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: {
  firstName: string;
  lastName: string;
  email: string;
  restaurant: string;
  message: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable");
    return { success: false, error: "Server configuration error" };
  }

  const { firstName, lastName, email, restaurant, message } = formData;
  const name = `${firstName} ${lastName}`;

  try {
    const { data, error } = await resend.emails.send({
      from: "miMesa Contact <noreply@mimesa.ch>",
      to: "paulo@mimesa.ch",
      replyTo: email,
      subject: `New contact from ${name}${restaurant ? ` — ${restaurant}` : ""}`,
      text: `
Name: ${name}
Email: ${email}
Restaurant: ${restaurant || "N/A"}

Message:
${message}
      `.trim(),
      html: `
<h3>New contact from miMesa website</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
<p><strong>Restaurant:</strong> ${restaurant || "N/A"}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br/>")}</p>
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Failed to send email:", err);
    return { success: false, error: "An unexpected error occurred." };
  }
}

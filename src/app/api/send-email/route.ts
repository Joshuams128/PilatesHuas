import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate form data
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "Joshuams128@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f5f2ec; padding: 15px; border-radius: 8px;">
            ${message}
          </p>
        </div>
      `,
    });

    if (adminEmailResult.error) {
      return Response.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return Response.json(
      { success: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return Response.json(
      { error: "An error occurred while sending the email" },
      { status: 500 }
    );
  }
}

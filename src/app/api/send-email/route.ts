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
      from: "contact@pilateshaus.ca",
      to: ["admin@pilateshaus.ca", "info@pilateshaus.ca"],
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

    // Send confirmation email to user
    await resend.emails.send({
      from: "contact@pilateshaus.ca",
      to: email,
      subject: "We received your message - Pilates Haus",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2>Thank You, ${name}!</h2>
          <p>We've received your message and will get back to you as soon as possible.</p>
          <p>If you have any urgent matters, feel free to contact us directly:</p>
          <ul>
            <li><strong>For bookings:</strong> info@pilateshaus.ca</li>
            <li><strong>For general inquiries:</strong> admin@pilateshaus.ca</li>
          </ul>
          <p>Movement. Intention. Strength.</p>
          <p><em>- The Pilates Haus Team</em></p>
        </div>
      `,
    });

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

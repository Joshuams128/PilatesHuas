import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { name, email, phone, message } = await request.json();

    // Validate form data
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Sanitize inputs to prevent HTML injection
    const sanitize = (str: string) => 
      str.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const sanitizedName = sanitize(name);
    const sanitizedEmail = sanitize(email);
    const sanitizedPhone = sanitize(phone || "");
    const sanitizedMessage = sanitize(message);

    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: "noreply@pilateshaus.ca",
      to: "joshuams128@gmail.com",
      subject: `New Contact Form Submission from ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #333;">
          <h2 style="color: #82614A;">New Contact Form Submission</h2>
          <div style="background-color: #f5f2ec; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            ${phone ? `<p><strong>Phone:</strong> ${sanitizedPhone}</p>` : ""}
            <p><strong>Message:</strong></p>
            <div style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 6px; border-left: 4px solid #82614A;">
              ${sanitizedMessage}
            </div>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #888;">
            This is an automated message from Pilates Haus website contact form.
          </p>
        </div>
      `,
    });

    if (adminEmailResult.error) {
      console.error("Resend error:", adminEmailResult.error);
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

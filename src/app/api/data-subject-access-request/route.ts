import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface FormData {
  name: string;
  email: string;
  requestType: "self" | "agent";
  law: string;
  details: string;
  confirmations: {
    accurate: boolean;
    irreversible: boolean;
    validation: boolean;
  };
}

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.law) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate confirmations
    if (
      !formData.confirmations.accurate ||
      !formData.confirmations.irreversible ||
      !formData.confirmations.validation
    ) {
      return NextResponse.json(
        { error: "All confirmations must be checked" },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Data Subject Access Request

Name: ${formData.name}
Email: ${formData.email}
Request Type: ${
      formData.requestType === "self" ? "Self/Guardian" : "Authorized Agent"
    }
Law: ${formData.law}
Details: ${formData.details}

Confirmations:
- Information is accurate: ${formData.confirmations.accurate ? "Yes" : "No"}
- Understands data deletion is irreversible: ${
      formData.confirmations.irreversible ? "Yes" : "No"
    }
- Understands email validation required: ${
      formData.confirmations.validation ? "Yes" : "No"
    }

Submitted on: ${new Date().toISOString()}
    `.trim();

    // Send email using Resend SDK
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      try {
        const { data, error } = await resend.emails.send({
          from: "support@findabohra.com",
          to: ["support@findabohra.com"],
          subject: "Data Subject Access Request - FindABohra",
          text: emailContent,
          replyTo: formData.email,
        });

        if (error) {
          console.error("Resend API error:", error);
          return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
          );
        }

        console.log("Email sent successfully:", data);
      } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
          { error: "Failed to send email" },
          { status: 500 }
        );
      }
    } else {
      // Fallback: Log the request for manual processing
      console.log(
        "Data Subject Access Request (Email service not configured):"
      );
      console.log(emailContent);

      // In development, you might want to return success anyway
      // In production, you should configure an email service
      if (process.env.NODE_ENV === "development") {
        console.log("Development mode: Email not sent, but request logged");
      } else {
        return NextResponse.json(
          { error: "Email service not configured" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

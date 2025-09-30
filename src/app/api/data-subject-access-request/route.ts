import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

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

// Store request in database
async function storeRequestInDatabase(formData: FormData): Promise<boolean> {
  try {
    const { error } = await supabase
      .from("data_subject_access_requests")
      .insert({
        name: formData.name,
        email: formData.email,
        request_type: formData.requestType,
        law: formData.law,
        details: formData.details,
        confirmations: formData.confirmations,
        created_at: new Date().toISOString(),
        status: "pending",
      });

    if (error) {
      console.error("Database error:", error);
      return false;
    }

    console.log("Request stored in database successfully");
    return true;
  } catch (error) {
    console.error("Error storing request in database:", error);
    return false;
  }
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

    // Always store the request in the database first
    const storedInDb = await storeRequestInDatabase(formData);

    if (!storedInDb) {
      return NextResponse.json(
        { error: "Failed to process request" },
        { status: 500 }
      );
    }

    // Optionally send email notification if Resend is configured
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
          // Don't fail the request - it's already stored in DB
        } else {
          console.log("Email notification sent successfully:", data);
        }
      } catch (error) {
        console.error("Error sending email notification:", error);
        // Don't fail the request - it's already stored in DB
      }
    } else {
      console.log(
        "Email notifications not configured - RESEND_API_KEY missing"
      );
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

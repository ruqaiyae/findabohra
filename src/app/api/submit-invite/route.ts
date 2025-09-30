import { NextRequest, NextResponse } from "next/server";
import { validateFormData } from "@/utils/validation";

interface InviteFormData {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  dialCode: string;
}

// Input sanitization to prevent XSS attacks and ensure data integrity
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags to prevent XSS
    .substring(0, 255); // Limit length to prevent buffer overflow attacks
}

export async function POST(request: NextRequest) {
  try {
    const formData: InviteFormData = await request.json();

    // Validate required fields
    if (!formData.name || !formData.email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone || ""),
      countryCode: sanitizeInput(formData.countryCode || "US"),
      dialCode: sanitizeInput(formData.dialCode || "+1"),
    };

    // Use centralized validation
    const validation = validateFormData(sanitizedData);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.errors.join(", ") },
        { status: 400 }
      );
    }

    const googleFormUrl = process.env.GOOGLE_FORM_URL;
    const nameEntryId = process.env.GOOGLE_FORM_NAME_ENTRY_ID;
    const emailEntryId = process.env.GOOGLE_FORM_EMAIL_ENTRY_ID;
    const phoneEntryId = process.env.GOOGLE_FORM_PHONE_ENTRY_ID;
    const countryEntryId = process.env.GOOGLE_FORM_COUNTRY_ENTRY_ID;

    if (
      googleFormUrl &&
      nameEntryId &&
      emailEntryId &&
      phoneEntryId &&
      countryEntryId
    ) {
      try {
        const formData = new URLSearchParams();
        formData.append(nameEntryId, sanitizedData.name);
        formData.append(emailEntryId, sanitizedData.email);
        formData.append(phoneEntryId, sanitizedData.phone || "");
        formData.append(countryEntryId, sanitizedData.countryCode);
        formData.append(countryEntryId, sanitizedData.dialCode);

        const response = await fetch(googleFormUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData,
        });

        if (!response.ok) {
          console.error(
            "Google Form submission failed:",
            response.status,
            response.statusText
          );
          return NextResponse.json(
            { error: "Failed to submit request. Please try again." },
            { status: 500 }
          );
        }
      } catch (error) {
        console.error("Error submitting to Google Sheets:", error);
        return NextResponse.json(
          { error: "Failed to submit request. Please try again." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "Request submitted successfully",
    });
  } catch (error) {
    console.error("Error processing invite request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

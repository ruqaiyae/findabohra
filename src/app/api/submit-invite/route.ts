import { NextRequest, NextResponse } from "next/server";
import { validateFormData } from "@/utils/validation";
import { submitInviteToSheets } from "@/lib/googleSheets";

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

    // Submit to Google Sheets using official API
    try {
      const success = await submitInviteToSheets(sanitizedData);

      if (!success) {
        console.error("Google Sheets submission failed");
        // Don't fail the request - this is optional integration
      } else {
      }
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);
      // Don't fail the request - this is optional integration
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

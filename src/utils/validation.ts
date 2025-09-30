// Input sanitization and validation utilities
import { parsePhoneNumberFromString, CountryCode } from "libphonenumber-js";

export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .substring(0, 255); // Limit length
}

export function isValidEmail(email: string): boolean {
  // RFC 5322 compliant email regex with length validation
  // Ensures proper email format while preventing overly long inputs
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
}

export function isValidPhone(phone: string, countryCode: string): boolean {
  if (!phone.trim()) return true; // Phone is optional

  // Basic validation: must contain only digits and be between 7-15 digits
  const digitsOnly = phone.replace(/\D/g, "");
  if (digitsOnly.length < 7 || digitsOnly.length > 15) {
    return false;
  }

  try {
    const phoneNumber = parsePhoneNumberFromString(
      phone,
      countryCode as CountryCode
    );

    if (phoneNumber && phoneNumber.isValid()) {
      return true;
    }
  } catch {
    // If parsing fails (invalid format), the number is invalid
    return false;
  }
}

export function isValidName(name: string): boolean {
  const sanitized = sanitizeInput(name);
  return sanitized.length >= 2 && sanitized.length <= 100;
}

// Centralized form validation that combines all field validations
// Returns both validation status and specific error messages for user feedback
export function validateFormData(data: {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  dialCode: string;
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!isValidName(data.name)) {
    errors.push("Name must be between 2 and 100 characters");
  }

  if (!isValidEmail(data.email)) {
    errors.push("Please enter a valid email address");
  }

  // Phone validation is conditional - only validate if phone is provided
  if (data.phone && !isValidPhone(data.phone, data.countryCode)) {
    errors.push("Please enter a valid phone number");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

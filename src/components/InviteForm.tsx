"use client";

import { useState } from "react";
import { CountryDropdown } from "./CountryDropdown";
import { Country, defaultCountry } from "@/data/countries";
import { validateFormData, sanitizeInput } from "@/utils/validation";

interface InviteFormData {
  name: string;
  email: string;
  phone: string;
  countryCode: Country;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  general?: string;
}

export function InviteForm() {
  const [formData, setFormData] = useState<InviteFormData>({
    name: "",
    email: "",
    phone: "",
    countryCode: defaultCountry,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error" | "network-error" | "validation-error"
  >("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Handle input changes with automatic sanitization and touch tracking
  const handleInputChange = (field: keyof InviteFormData, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData((prev) => ({
      ...prev,
      [field]: sanitizedValue,
    }));
    // Mark field as touched to enable validation feedback
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handlePhoneChange = (value: string) => {
    // Only allow digits
    const digitsOnly = value.replace(/\D/g, "");
    handleInputChange("phone", digitsOnly);
  };

  const handleCountrySelect = (country: Country) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: country,
    }));
  };

  const formValidation = validateFormData({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    countryCode: formData.countryCode.code,
    dialCode: formData.countryCode.dialCode,
  });

  if (Object.keys(touched).length > 0) {
    const newErrors: FormErrors = {};
    formValidation.errors.forEach((error) => {
      if (error.includes("Name")) newErrors.name = error;
      else if (error.includes("email")) newErrors.email = error;
      else if (error.includes("phone")) newErrors.phone = error;
    });
    // Only update errors state if there's an actual change to prevent unnecessary re-renders
    if (JSON.stringify(newErrors) !== JSON.stringify(errors)) {
      setErrors(newErrors);
    }
  }

  // Helper function to check if error should be displayed for a field
  const shouldShowError = (fieldName: string) => {
    return touched[fieldName] && errors[fieldName as keyof FormErrors];
  };

  const isFormValid =
    formValidation.isValid && formData.name.trim() && formData.email.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      setSubmitStatus("validation-error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrors({});

    try {
      const response = await fetch("/api/submit-invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          countryCode: formData.countryCode.code,
          dialCode: formData.countryCode.dialCode,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle different error types with appropriate user feedback
        if (response.status === 429) {
          // Rate limiting - user is submitting too frequently
          setSubmitStatus("error");
          setErrors({ general: "Too many requests. Please try again later." });
        } else if (response.status === 400) {
          // Client-side validation errors from server
          setSubmitStatus("validation-error");
          setErrors({
            general: result.error || "Please check your input and try again.",
          });
        } else if (response.status >= 500) {
          // Server-side errors - temporary service issues
          setSubmitStatus("network-error");
          setErrors({
            general: "Service temporarily unavailable. Please try again later.",
          });
        } else {
          // Other unexpected errors
          setSubmitStatus("error");
          setErrors({
            general: result.error || "An unexpected error occurred.",
          });
        }
        return;
      }

      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        countryCode: defaultCountry,
      });
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error("Error submitting invite request:", error);
      setSubmitStatus("network-error");
      setErrors({
        general: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm border border-purple-200 rounded-2xl p-4 md:p-6 shadow-lg">
      <h2 className="text-base md:text-xl text-gray-900 mb-2 text-center">
        ✨ Request Early Access ✨
      </h2>

      <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6 text-center px-4">
        Be among our early users! You will receive a special access code to join
        when the app launches
      </p>

      {submitStatus === "success" && (
        <div className="mb-4 md:mb-6 p-3 md:p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-xs md:text-sm text-green-800">
            Thank you for your interest! We&apos;ve received your request and
            will notify you when early access becomes available.
          </p>
        </div>
      )}

      {(submitStatus === "error" ||
        submitStatus === "network-error" ||
        submitStatus === "validation-error") && (
        <div className="mb-4 md:mb-6 p-3 md:p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-xs md:text-sm text-red-800">
            {errors.general ||
              "There was an error submitting your request. Please try again or contact support."}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="sr-only">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            required
            aria-describedby={
              shouldShowError("name") ? "name-error" : undefined
            }
            className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-md md:rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-xs md:text-base ${
              shouldShowError("name") ? "border-red-300" : "border-purple-200"
            }`}
            placeholder="Your name"
          />
          {shouldShowError("name") && (
            <p id="name-error" className="mt-1 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
            aria-describedby={
              shouldShowError("email") ? "email-error" : undefined
            }
            className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-md md:rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-xs md:text-base ${
              shouldShowError("email") ? "border-red-300" : "border-purple-200"
            }`}
            placeholder="Your email address"
          />
          {shouldShowError("email") && (
            <p id="email-error" className="mt-1 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="flex space-x-2">
          <div className="w-24 md:w-32 relative">
            <label htmlFor="country" className="sr-only">
              Country Code
            </label>
            <CountryDropdown
              selectedCountry={formData.countryCode}
              onCountrySelect={handleCountrySelect}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="phone" className="sr-only">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              maxLength={15}
              aria-describedby={
                shouldShowError("phone") ? "phone-error" : undefined
              }
              className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-md md:rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-xs md:text-base ${
                shouldShowError("phone")
                  ? "border-red-300"
                  : "border-purple-200"
              }`}
              placeholder="Phone number (optional)"
            />
            {shouldShowError("phone") && (
              <p id="phone-error" className="mt-1 text-xs text-red-600">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            aria-describedby="submit-status"
            className={`w-full px-4 md:px-6 py-2 md:py-3 rounded-md md:rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
              isFormValid && !isSubmitting
                ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? "SUBMITTING..." : "Sign me up!"}
          </button>
          <div id="submit-status" className="sr-only" aria-live="polite">
            {isSubmitting
              ? "Submitting your request..."
              : submitStatus === "success"
                ? "Request submitted successfully"
                : submitStatus === "error"
                  ? "Error submitting request"
                  : ""}
          </div>
        </div>

        {/* Why Sign Up Tooltip */}
        <div className="relative inline-block w-full">
          <div className="group text-center">
            <span className="text-xs text-purple-600 hover:text-purple-800 cursor-pointer font-medium decoration-solid underline decoration-purple-400 hover:decoration-purple-600 underline-offset-2 transition-all duration-200 inline-block">
              Why sign up?
            </span>

            {/* Tooltip Content */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-80 bg-white border-2 border-purple-300 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50 p-4">
              <div className="text-xs text-gray-900 space-y-3 text-left">
                <div className="font-bold text-gray-900 mb-4 text-center text-sm border-b-2 border-purple-200 pb-3">
                  Exclusive Benefits
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="font-bold text-purple-800">
                      Exclusive Access:
                    </span>{" "}
                    Be part of the private beta before the full launch.
                  </div>
                  <div>
                    <span className="font-bold text-purple-800">
                      Shape the Experience:
                    </span>{" "}
                    Your feedback will directly influence the future of FAB.
                  </div>
                  <div>
                    <span className="font-bold text-purple-800">
                      Better Matches:
                    </span>{" "}
                    Early users get the first look at a carefully curated pool
                    of Bohra profiles.
                  </div>
                  <div className="font-bold text-purple-700 text-xs pt-3 border-t-2 border-purple-200 text-center bg-purple-50 -mx-2 px-3 py-2 rounded-lg">
                    100% Private, 100% for Bohras, 100% Free
                  </div>
                </div>
              </div>

              {/* Tooltip Arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-[9px] border-r-[9px] border-t-[9px] border-l-transparent border-r-transparent border-t-purple-200"></div>
                <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-white absolute -top-[8px] left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

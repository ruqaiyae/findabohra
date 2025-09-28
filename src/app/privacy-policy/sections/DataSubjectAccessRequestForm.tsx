"use client";

import { useState, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  requestType: "self" | "agent";
  law: string;
  requestTypeOption: string;
  details: string;
  confirmations: {
    accurate: boolean;
    irreversible: boolean;
    validation: boolean;
  };
}

export function DataSubjectAccessRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    requestType: "self",
    law: "",
    requestTypeOption: "",
    details: "",
    confirmations: {
      accurate: false,
      irreversible: false,
      validation: false,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      // Reset requestTypeOption when law changes
      if (field === "law") {
        updated.requestTypeOption = "";
      }
      return updated;
    });
  };

  const handleConfirmationChange = (
    field: keyof FormData["confirmations"],
    checked: boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      confirmations: { ...prev.confirmations, [field]: checked },
    }));
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const getRequestTypeOptions = (law: string) => {
    const options: Record<string, string[]> = {
      GDPR: [
        "Confirm that my personal information is being processed",
        "Access my personal information",
        "Edit / correct my personal information",
        "Have my personal information deleted",
        "Restrict the processing of my personal information",
        "Ask a question about FindABohra's privacy policy",
        "Withdraw my consent to the processing of my personal information",
        "Deny FindABohra the right to use my personal information for purposes of direct marketing, including profiling",
        "Other (please specify in the comment box below)",
      ],
      CCPA: [
        "Know what information is being collected from me",
        "Have my information deleted",
        "Opt out of having my data sold to third parties",
        "Opt in to the sale of my personal data",
        "Access my personal information",
        "Fix inaccurate information",
        "Receive a copy of my personal information",
        "Opt out of having my data shared for cross-context behavioral advertising",
        "Limit the use and disclosure of my sensitive personal information",
        "Other (please specify in the comment box below)",
      ],
      CPA: [
        "Know what information is being collected from me",
        "Have my personal information deleted",
        "Opt out of having my data sold to third parties",
        "Opt out of data processing for targeted advertising",
        "Opt out of data processing for profiling",
        "Access my personal information",
        "Fix inaccurate information",
        "Appeal a data request decision",
        "Other (please specify in the comment box below)",
      ],
      CTDPA: [
        "Know what information is being collected from me",
        "Have my personal information deleted",
        "Opt out of having my data sold to third parties",
        "Opt out of data processing for targeted advertising",
        "Opt out of data processing for profiling",
        "Access my personal information",
        "Fix inaccurate information",
        "Appeal a data request decision",
        "Other (please specify in the comment box below)",
      ],
      UCPA: [
        "Know what information is being collected from me",
        "Have my personal information deleted",
        "Opt out of having my data sold to third parties",
        "Opt out of data processing for targeted advertising",
        "Access my personal information",
        "Other (please specify in the comment box below)",
      ],
      VCDPA: [
        "Know what information is being collected from me",
        "Have my personal information deleted",
        "Opt out of having my data sold to third parties",
        "Opt out of data processing for targeted advertising",
        "Opt out of data processing for profiling",
        "Access my personal information",
        "Fix inaccurate information",
        "Appeal a data request decision",
        "Other (please specify in the comment box below)",
      ],
      OTHER: [],
    };
    return options[law] || [];
  };

  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      isValidEmail(formData.email) &&
      formData.law &&
      formData.requestTypeOption &&
      formData.confirmations.accurate &&
      formData.confirmations.irreversible &&
      formData.confirmations.validation
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/data-subject-access-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          requestType: "self",
          law: "",
          requestTypeOption: "",
          details: "",
          confirmations: {
            accurate: false,
            irreversible: false,
            validation: false,
          },
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="data-subject-access-request" className="mt-4">
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xs md:text-lg font-bold text-gray-900 mb-1">
          Data Subject Access Request Form
        </h2>

        <p className="text-[10px] md:text-sm text-gray-600 mb-4">
          Please fill in the information below. The website administrator or
          data protection officer will be notified of your request within 24
          hours, and will need an appropriate amount of time to respond.
        </p>

        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-[10px] md:text-sm text-green-800">
              Your request has been submitted successfully. You will receive a
              confirmation email shortly.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-[10px] md:text-sm text-red-800">
              There was an error submitting your request. Please try again or
              contact support directly.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-[10px] md:text-sm font-medium text-gray-700 mb-0.5"
            >
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              className="w-full text-[10px] md:text-sm px-1 py-1 md:px-2 md:py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-[10px] md:text-sm font-medium text-gray-700 mb-1"
            >
              What email address do you use to access the app?{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="w-full text-[10px] md:text-sm px-1 py-1 md:px-2 md:py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Request Type */}
          <div>
            <label className="block text-[10px] md:text-sm font-medium text-gray-700 mb-2">
              You are submitting this request as{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="space-y-0.5 md:space-y-1">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="requestType"
                  value="self"
                  checked={formData.requestType === "self"}
                  onChange={(e) =>
                    handleInputChange("requestType", e.target.value)
                  }
                  className="mr-2"
                />
                <span className="text-[10px] md:text-sm text-gray-700">
                  The person, or the parent / guardian of the person, whose name
                  appears above.
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="requestType"
                  value="agent"
                  checked={formData.requestType === "agent"}
                  onChange={(e) =>
                    handleInputChange("requestType", e.target.value)
                  }
                  className="mr-2"
                />
                <span className="text-[10px] md:text-sm text-gray-700">
                  An agent authorized by the consumer to make this request on
                  their behalf.
                </span>
              </label>
            </div>
          </div>

          {/* Law */}
          <div>
            <label
              htmlFor="law"
              className="block text-[10px] md:text-sm font-medium text-gray-700 mb-1"
            >
              Under the rights of which law are you making this request?{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              id="law"
              value={formData.law}
              onChange={(e) => handleInputChange("law", e.target.value)}
              required
              className="w-full text-[10px] md:text-sm px-1 py-1 md:px-2 md:py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select...</option>
              <option value="GDPR">GDPR</option>
              <option value="CCPA">CCPA</option>
              <option value="CPA">CPA</option>
              <option value="CTDPA">CTDPA</option>
              <option value="UCPA">UCPA</option>
              <option value="VCDPA">VCDPA</option>
              <option value="OTHER">OTHER</option>
            </select>
          </div>

          {/* Request Type Options */}
          {formData.law && (
            <div>
              <label className="block text-[10px] md:text-sm font-medium text-gray-700 mb-2">
                I am submitting a request to FindABohra{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="space-y-1 md:space-y-2">
                {getRequestTypeOptions(formData.law).map((option, index) => (
                  <label key={index} className="flex items-start">
                    <input
                      type="radio"
                      name="requestTypeOption"
                      value={option}
                      checked={formData.requestTypeOption === option}
                      onChange={(e) =>
                        handleInputChange("requestTypeOption", e.target.value)
                      }
                      className="mr-2 mt-1"
                    />
                    <span className="text-[10px] md:text-sm text-gray-700">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Details */}
          <div>
            <label
              htmlFor="details"
              className="block text-[10px] md:text-sm font-medium text-gray-700 mb-1"
            >
              Please leave details regarding your action request or question.
            </label>
            <textarea
              id="details"
              value={formData.details}
              onChange={(e) => handleInputChange("details", e.target.value)}
              rows={4}
              className="w-full text-[10px] md:text-sm px-1 py-1 md:px-2 md:py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            />
          </div>

          {/* Confirmations */}
          <div>
            <label className="block text-[10px] md:text-xs font-medium text-gray-700 mb-2">
              I confirm that <span className="text-red-500">*</span>
            </label>
            <div className="space-y-0.5 md:space-y-1.5">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.confirmations.accurate}
                  onChange={(e) =>
                    handleConfirmationChange("accurate", e.target.checked)
                  }
                  className="mr-2 mt-1"
                />
                <span className="text-[10px] md:text-xs text-gray-700">
                  Under penalty of perjury, I declare all the above information
                  to be true and accurate.
                </span>
              </label>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.confirmations.irreversible}
                  onChange={(e) =>
                    handleConfirmationChange("irreversible", e.target.checked)
                  }
                  className="mr-2 mt-1"
                />
                <span className="text-[10px] md:text-xs text-gray-700">
                  I understand that the deletion or restriction of my personal
                  data is irreversible and may result in the termination of
                  services with FindABohra.
                </span>
              </label>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.confirmations.validation}
                  onChange={(e) =>
                    handleConfirmationChange("validation", e.target.checked)
                  }
                  className="mr-2 mt-1"
                />
                <span className="text-[10px] md:text-xs text-gray-700">
                  I understand that I will be required to validate my request by
                  email, and I may be contacted in order to complete the
                  request.
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className={`px-3 py-1 md:px-6 md:py-2 rounded-md text-[10px] md:text-sm font-medium ${
                isMounted && isFormValid() && !isSubmitting
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              } transition-colors`}
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

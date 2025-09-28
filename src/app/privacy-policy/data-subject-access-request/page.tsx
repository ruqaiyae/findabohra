import type { Metadata } from "next";
import Image from "next/image";
import { Hearts } from "@/components/ui/Hearts";
import { DataSubjectAccessRequestForm } from "../sections/DataSubjectAccessRequestForm";

export const metadata: Metadata = {
  title: "Data Subject Access Request - Find a Bohra",
  description:
    "Submit a data subject access request to review, update, or delete your personal information on Find a Bohra",
};

export default function DataSubjectAccessRequestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 relative">
      {/* Decorative background elements - hidden on mobile */}
      <div className="hidden md:block fixed top-20 left-10 opacity-20 z-0">
        <Image
          src="/hero-heart.png"
          alt="Decorative heart"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <div className="hidden md:block fixed top-40 right-10 opacity-15 z-0">
        <Image
          src="/hearts.png"
          alt="Decorative hearts"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
      <div className="hidden md:block fixed bottom-20 left-20 opacity-10 z-0">
        <Hearts scale="scale-x-[-1]" />
      </div>

      <div className="max-w-5xl mx-auto pt-4 pb-10 md:py-20 px-6 md:px-4 relative z-10">
        <div className="px-3 md:px-4 bg-white/80 backdrop-blur-sm border border-purple-100 rounded-2xl shadow-lg">
          <div className="prose prose-lg max-w-none py-4 md:py-8 px-4 md:px-8 lg:px-16">
            <h1 className="text-base md:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
              DATA SUBJECT ACCESS REQUEST
            </h1>
            <p className="text-[10px] md:text-sm text-gray-600 mb-6 md:mb-8">
              Submit a request to review, update, or delete your personal
              information
            </p>

            <DataSubjectAccessRequestForm />
          </div>
        </div>
      </div>
    </div>
  );
}

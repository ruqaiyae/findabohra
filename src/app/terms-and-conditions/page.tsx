import type { Metadata } from "next";
import Image from "next/image";
import { Hearts } from "@/components/ui/Hearts";
import {
  AgreementToLegalTerms,
  TableOfContents,
  OurServices,
  IntellectualProperty,
  UserRepresentations,
  UserRegistration,
  Subscriptions,
  ProhibitedActivities,
  UserGeneratedContributions,
  ContributionLicense,
  GuidelinesForReviews,
  MobileApplicationLicense,
  SocialMedia,
  ServicesManagement,
  PrivacyPolicy,
  CopyrightInfringements,
  TermAndTermination,
  ModificationsAndInterruptions,
  GoverningLaw,
  DisputeResolution,
  Corrections,
  Disclaimer,
  LimitationsOfLiability,
  Indemnification,
  UserData,
  ElectronicCommunications,
  SMSTextMessaging,
  CaliforniaUsers,
  Miscellaneous,
  CommunityGuidelines,
  ContactUs,
} from "./sections/index";

export const metadata: Metadata = {
  title: "Terms and Conditions - Find a Bohra",
  description:
    "Terms and Conditions for Find a Bohra - Dating App for Dawoodi Bohra Community",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 relative">
      {/* Decorative background elements - hidden on mobile */}
      <div className="hidden md:block fixed top-20 left-10 opacity-20 z-0">
        <Image
          src="/hero-heart.png"
          alt="Decorative heart"
          width={200}
          height={200}
          className="object-contain w-auto h-auto"
        />
      </div>
      <div className="hidden md:block fixed top-40 right-10 opacity-15 z-0">
        <Image
          src="/hearts.png"
          alt="Decorative hearts"
          width={150}
          height={150}
          className="object-contain w-auto h-auto"
        />
      </div>
      <div className="hidden md:block fixed bottom-20 left-20 opacity-10 z-0">
        <Hearts scale="scale-x-[-1]" />
      </div>

      <div className="max-w-5xl mx-auto pt-4 pb-10 md:py-20 px-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-sm border border-purple-100 rounded-2xl shadow-lg">
          <div className="prose prose-lg max-w-none py-4 md:py-8 px-4 md:px-8 lg:px-16">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              TERMS AND CONDITIONS
            </h1>
            <p className="text-xs md:text-sm text-gray-600 mb-6 md:mb-8">
              Last updated September 12, 2025
            </p>

            <div id="terms-notice-full" className="space-y-6 md:space-y-8">
              <AgreementToLegalTerms />
              <TableOfContents />
              <OurServices />
              <IntellectualProperty />
              <UserRepresentations />
              <UserRegistration />
              <Subscriptions />
              <ProhibitedActivities />
              <UserGeneratedContributions />
              <ContributionLicense />
              <GuidelinesForReviews />
              <MobileApplicationLicense />
              <SocialMedia />
              <ServicesManagement />
              <PrivacyPolicy />
              <CopyrightInfringements />
              <TermAndTermination />
              <ModificationsAndInterruptions />
              <GoverningLaw />
              <DisputeResolution />
              <Corrections />
              <Disclaimer />
              <LimitationsOfLiability />
              <Indemnification />
              <UserData />
              <ElectronicCommunications />
              <SMSTextMessaging />
              <CaliforniaUsers />
              <Miscellaneous />
              <CommunityGuidelines />
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

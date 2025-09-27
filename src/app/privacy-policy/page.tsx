import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hearts } from "@/components/ui/Hearts";

export const metadata: Metadata = {
  title: "Privacy Policy - Find a Bohra",
  description:
    "Privacy Policy for Find a Bohra - Dating App for Dawoodi Bohra Community",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 relative">
      <Header />

      {/* Decorative background elements */}
      <div className="fixed top-20 left-10 opacity-20 z-0">
        <Image
          src="/hero-heart.png"
          alt="Decorative heart"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <div className="fixed top-40 right-10 opacity-15 z-0">
        <Image
          src="/hearts.png"
          alt="Decorative hearts"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
      <div className="fixed bottom-20 left-20 opacity-10 z-0">
        <Hearts scale="scale-x-[-1]" />
      </div>

      <div className="max-w-5xl mx-auto mt-10 mb-20 px-4 py-16 relative z-10">
        <div className="bg-white/80 backdrop-blur-sm border border-purple-100 rounded-2xl shadow-lg">
          <div className="prose prose-lg max-w-none py-8 px-8 md:px-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              PRIVACY POLICY
            </h1>
            <p className="text-gray-600 mb-8">
              Last updated September 11, 2025
            </p>

            <div id="privacy-notice-full" className="space-y-8">
              <section id="introduction">
                <p className="text-gray-700 leading-relaxed">
                  This Privacy Notice for FindABohra (&quot;<strong>we</strong>
                  ,&quot; &quot;<strong>us</strong>,&quot; or &quot;
                  <strong>our</strong>&quot;), describes how and why we might
                  access, collect, store, use, and/or share (&quot;
                  <strong>process</strong>&quot;) your personal information when
                  you use our services (&quot;<strong>Services</strong>&quot;),
                  including when you:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li className="text-gray-700">
                    Visit our website at{" "}
                    <a
                      href="https://www.findabohra.com"
                      className="text-blue-600 hover:underline"
                    >
                      https://www.findabohra.com
                    </a>{" "}
                    or any website of ours that links to this Privacy Notice
                  </li>
                  <li className="text-gray-700">
                    Download and use our mobile application (Find A Bohra
                    (FAB)), or any other application of ours that links to this
                    Privacy Notice
                  </li>
                  <li className="text-gray-700">
                    Use Find A Bohra . FindABohra (&quot;FAB&quot;) is a
                    private, members-only digital dating platform created for
                    the Dawoodi Bohra community. The service enables eligible
                    members to create profiles, browse other profiles, indicate
                    interest, and connect through matches. FAB provides features
                    such as viewing who has liked your profile, chatting with
                    matches, boosting profile visibility, and prioritizing
                    messages. The platform is designed to help members build
                    meaningful, culturally aligned relationships in a safe and
                    respectful environment. FAB may collect personal information
                    (such as name, age, location, and preferences) as well as
                    behavioral data (such as likes, chats, and profile activity)
                    to provide personalized matchmaking and improve user
                    experience. All data is handled with strict confidentiality
                    and used only for the purpose of delivering and enhancing
                    the service.
                  </li>
                  <li className="text-gray-700">
                    Engage with us in other related ways, including any sales,
                    marketing, or events
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Questions or concerns?</strong> Reading this Privacy
                    Notice will help you understand your privacy rights and
                    choices. We are responsible for making decisions about how
                    your personal information is processed. If you do not agree
                    with our policies and practices, please do not use our
                    Services. If you still have any questions or concerns,
                    please contact us at{" "}
                    <a
                      href="mailto:support@findabohra.com"
                      className="text-blue-600 hover:underline"
                    >
                      support@findabohra.com
                    </a>
                    .
                  </p>
                </div>
              </section>

              <section id="summary-of-key-points">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  SUMMARY OF KEY POINTS
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  This summary provides key points from our Privacy Notice, but
                  you can find out more details about any of these topics by
                  clicking the link following each key point or by using our{" "}
                  <a
                    href="/privacy-policy/#table-of-contents"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    table of contents
                  </a>{" "}
                  below to find the section you are looking for.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      What personal information do we process?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      When you visit, use, or navigate our Services, we may
                      process personal information depending on how you interact
                      with us and the Services, the choices you make, and the
                      products and features you use. Learn more about{" "}
                      <a
                        href="/privacy-policy/#what-information-do-we-collect"
                        className="text-blue-600 hover:underline font-semibold"
                      >
                        personal information you disclose to us
                      </a>
                      .
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Do we process any sensitive personal information?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Some of the information may be considered
                      &quot;special&quot; or &quot;sensitive&quot; in certain
                      jurisdictions, for example your racial or ethnic origins,
                      sexual orientation, and religious beliefs. We may process
                      sensitive personal information when necessary with your
                      consent or as otherwise permitted by applicable law. Learn
                      more about{" "}
                      <a
                        href="/privacy-policy/#sensitive-information"
                        className="text-blue-600 hover:underline font-semibold"
                      >
                        sensitive information we process
                      </a>
                      .
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Do we collect any information from third parties?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We do not collect any information from third parties.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      How do we process your information?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We process your information to provide, improve, and
                      administer our Services, communicate with you, for
                      security and fraud prevention, and to comply with law. We
                      may also process your information for other purposes with
                      your consent. We process your information only when we
                      have a valid legal reason to do so. Learn more about{" "}
                      <a
                        href="/privacy-policy/#how-do-we-process-your-information"
                        className="text-blue-600 hover:underline font-semibold"
                      >
                        how we process your information
                      </a>
                      .
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      In what situations and with which parties do we share
                      personal information?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may share information in specific situations and with
                      specific third parties. Learn more about{" "}
                      <a
                        href="/privacy-policy/#when-and-with-whom-do-we-share-your-personal-information"
                        className="text-blue-600 hover:underline font-semibold"
                      >
                        when and with whom we share your personal information
                      </a>
                      .
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      How do we keep your information safe?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We have adequate organizational and technical processes
                      and procedures in place to protect your personal
                      information. However, no electronic transmission over the
                      internet or information storage technology can be
                      guaranteed to be 100% secure, so we cannot promise or
                      guarantee that hackers, cybercriminals, or other
                      unauthorized third parties will not be able to defeat our
                      security and improperly collect, access, steal, or modify
                      your information. Learn more about{" "}
                      <a
                        href="/privacy-policy/#how-do-we-keep-your-information-safe"
                        className="text-blue-600 hover:underline font-semibold"
                      >
                        how we keep your information safe
                      </a>
                      .
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      What are your rights?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Depending on where you are located geographically, the
                      applicable privacy law may mean you have certain rights
                      regarding your personal information. Learn more about{" "}
                      <a
                        href="/privacy-policy/#what-are-your-privacy-rights"
                        className="text-blue-600 hover:underline font-semibold"
                      >
                        your privacy rights
                      </a>
                      .
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      How do you exercise your rights?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The easiest way to exercise your rights is by submitting a{" "}
                      <a
                        href="/privacy-policy/#how-can-you-review-update-or-delete-the-data-we-collect-from-you"
                        className="text-blue-600 hover:underline font-semibold"
                      >
                        data subject access request
                      </a>
                      , or by contacting us. We will consider and act upon any
                      request in accordance with applicable data protection
                      laws.
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Want to learn more about what we do with any information we
                    collect?{" "}
                    <a
                      href="/privacy-policy/#privacy-notice-full"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Review the Privacy Notice in full
                    </a>
                    .
                  </p>
                </div>
              </section>

              <section id="table-of-contents" className="my-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                  TABLE OF CONTENTS
                </h2>
                <div className="space-y-1">
                  <p className="text-gray-700">
                    <a
                      href="/privacy-policy/#what-information-do-we-collect"
                      className="text-blue-600 hover:underline"
                    >
                      1. WHAT INFORMATION DO WE COLLECT?
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a
                      href="/privacy-policy/#how-do-we-process-your-information"
                      className="text-blue-600 hover:underline"
                    >
                      2. HOW DO WE PROCESS YOUR INFORMATION?
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a
                      href="/privacy-policy/#what-legal-bases-do-we-rely-on-to-process-your-personal-information"
                      className="text-blue-600 hover:underline"
                    >
                      3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                      INFORMATION?
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a
                      href="/privacy-policy/#when-and-with-whom-do-we-share-your-personal-information"
                      className="text-blue-600 hover:underline"
                    >
                      4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
                      INFORMATION?
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a
                      href="/privacy-policy/#do-we-use-cookies-and-other-tracking-technologies"
                      className="text-blue-600 hover:underline"
                    >
                      5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a
                      href="/privacy-policy/#how-do-we-handle-your-social-logins"
                      className="text-blue-600 hover:underline"
                    >
                      6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a
                      href="/privacy-policy/#is-your-information-transferred-internationally"
                      className="text-blue-600 hover:underline"
                    >
                      7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a
                      href="/privacy-policy/#how-long-do-we-keep-your-information"
                      className="text-blue-600 hover:underline"
                    >
                      8. HOW LONG DO WE KEEP YOUR INFORMATION?
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a
                      href="/privacy-policy/#how-do-we-keep-your-information-safe"
                      className="text-blue-600 hover:underline"
                    >
                      9. HOW DO WE KEEP YOUR INFORMATION SAFE?
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a
                      href="/privacy-policy/#do-we-collect-information-from-minors"
                      className="text-blue-600 hover:underline"
                    >
                      10. DO WE COLLECT INFORMATION FROM MINORS?
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a
                      href="/privacy-policy/#what-are-your-privacy-rights"
                      className="text-blue-600 hover:underline"
                    >
                      11. WHAT ARE YOUR PRIVACY RIGHTS?
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a
                      href="/privacy-policy/#controls-for-do-not-track-features"
                      className="text-blue-600 hover:underline"
                    >
                      12. CONTROLS FOR DO-NOT-TRACK FEATURES
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a
                      href="/privacy-policy/#do-united-states-residents-have-specific-privacy-rights"
                      className="text-blue-600 hover:underline"
                    >
                      13. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY
                      RIGHTS?
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a
                      href="/privacy-policy/#do-other-regions-have-specific-privacy-rights"
                      className="text-blue-600 hover:underline"
                    >
                      14. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a
                      href="/privacy-policy/#do-we-make-updates-to-this-notice"
                      className="text-blue-600 hover:underline"
                    >
                      15. DO WE MAKE UPDATES TO THIS NOTICE?
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a
                      href="/privacy-policy/#how-can-you-contact-us-about-this-notice"
                      className="text-blue-600 hover:underline"
                    >
                      16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a
                      href="/privacy-policy/#how-can-you-review-update-or-delete-the-data-we-collect-from-you"
                      className="text-blue-600 hover:underline"
                    >
                      17. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                      COLLECT FROM YOU?
                    </a>
                  </p>
                </div>
              </section>

              <section id="what-information-do-we-collect">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. WHAT INFORMATION DO WE COLLECT?
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Personal information you disclose to us
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>In Short:</strong>{" "}
                      <em>
                        We collect personal information that you provide to us.
                      </em>
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We collect personal information that you voluntarily
                      provide to us when you register on the Services, express
                      an interest in obtaining information about us or our
                      products and Services, when you participate in activities
                      on the Services, or otherwise when you contact us.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Personal Information Provided by You.
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The personal information that we collect depends on the
                      context of your interactions with us and the Services, the
                      choices you make, and the products and features you use.
                      The personal information we collect may include the
                      following:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>names</li>
                      <li>phone numbers</li>
                      <li>email addresses</li>
                      <li>job titles</li>
                      <li>usernames</li>
                      <li>passwords</li>
                      <li>contact or authentication data</li>
                      <li>billing addresses</li>
                      <li>debit/credit card numbers</li>
                      <li>mailing addresses</li>
                      <li>
                        typical categories fab will collect directly: 1. account
                        basics • full name (or display name) • email address •
                        phone number (for otp verification) • date of birth (to
                        confirm age eligibility) • gender • password/credentials
                        2. profile information • photos (uploaded directly) •
                        location (city, state, country — could also include gps
                        if you add location-based features) • community
                        background / cultural identifiers (optional, but likely
                        important for fab) • personality inputs (your -5 to +5
                        sliders for traits like introvert vs extrovert, planner
                        vs spontaneous, etc.) • &quot;about me&quot; bio text 3.
                        preferences • match preferences (age range, location,
                        interests, lifestyle values) • notification preferences
                        4. payment information (if subscriptions are paid
                        through the app) • credit card / payment provider info
                        (though in many cases this is routed through
                        apple/google pay or a third-party processor, meaning you
                        don&apos;t store it yourself) 5. communications •
                        messages, chats, likes, or comments (all user-generated
                        content is still &quot;directly provided&quot;). ⸻ not
                        &quot;directly collected&quot; but often listed
                        separately: • device information (ip address, browser
                        type, os) → usually &quot;automatically collected&quot;
                        • behavioral data (likes, swipes, time on app) →
                        &quot;inferred&quot;
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <span className="font-semibold text-gray-900 mb-3">
                        Sensitive Information.{" "}
                      </span>
                      When necessary, with your consent or as otherwise
                      permitted by applicable law, we process the following
                      categories of sensitive information:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>biometric data</li>
                      <li>
                        data about a person&apos;s sex life or sexual
                        orientation
                      </li>
                      <li>information revealing race or ethnic origin</li>
                      <li>
                        information revealing religious or philosophical beliefs
                      </li>
                      <li>credit worthiness data</li>
                      <li>
                        sensitive information fab collects 1. date of birth /
                        age → age-related data is sensitive because it&apos;s
                        tied to eligibility (minors must be excluded). 2. gender
                        / sexual orientation → collecting gender (and in some
                        cases, preferences related to orientation) counts as
                        sensitive under gdpr and other privacy frameworks. 3.
                        cultural / religious affiliation (optional but relevant
                        for fab) → if users enter details about being dawoodi
                        bohra or any other identifiers, this is sensitive data.
                        religious and cultural information is highly regulated.
                        4. photos &amp; profile media → because they can reveal
                        race, ethnicity, religious attire, and other
                        identifiers, photos are treated as sensitive data. 5.
                        personal traits &amp; personality profiling → your
                        slider inputs (introvert vs extrovert, traditional vs
                        modern, etc.) are behavioral/psychological profiling,
                        which is considered sensitive in many jurisdictions. 6.
                        messages / chats → user communications are also
                        considered sensitive, since they may contain deeply
                        personal or identifying details. not typically sensitive
                        but still personal • name, email, phone → standard
                        personal identifiers. • payment info → considered
                        financial data, highly protected, but usually processed
                        via third-party payment processors.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <span className="font-semibold text-gray-900 mb-3">
                        Payment Data.{" "}
                      </span>
                      We may collect data necessary to process your payment if
                      you choose to make purchases, such as your payment
                      instrument number, and the security code associated with
                      your payment instrument. All payment data is handled and
                      stored by{" "}
                      <a
                        href="https://stripe.com/privacy"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Stripe
                      </a>
                      ,{" "}
                      <a
                        href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Paypal
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://razorpay.com/privacy/"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        RazorPay
                      </a>
                      . You may find their privacy notice link(s) here:{" "}
                      <a
                        href="https://stripe.com/privacy"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://stripe.com/privacy
                      </a>
                      ,{" "}
                      <a
                        href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.paypal.com/us/webapps/mpp/ua/privacy-full
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://razorpay.com/privacy/"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://razorpay.com/privacy/
                      </a>
                      .
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <span className="font-semibold text-gray-900 mb-3">
                        Social Media Login Data.{" "}
                      </span>
                      We may provide you with the option to register with us
                      using your existing social media account details, like
                      your Facebook, X, or other social media account. If you
                      choose to register in this way, we will collect certain
                      profile information about you from the social media
                      provider, as described in the section called{" "}
                      <a
                        href="/privacy-policy/#how-do-we-handle-your-social-logins"
                        className="text-blue-600 hover:underline"
                      >
                        &quot;HOW DO WE HANDLE YOUR SOCIAL LOGINS?&quot;
                      </a>{" "}
                      below.
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <span className="font-semibold text-gray-900 mb-3">
                        Application Data.{" "}
                      </span>
                      If you use our application(s), we also may collect the
                      following information if you choose to provide us with
                      access or permission:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                      <li>
                        <em>Geolocation Information.</em> We may request access
                        or permission to track location-based information from
                        your mobile device, either continuously or while you are
                        using our mobile application(s), to provide certain
                        location-based services. If you wish to change our
                        access or permissions, you may do so in your
                        device&apos;s settings.
                      </li>
                      <li>
                        <em>Mobile Device Access.</em> We may request access or
                        permission to certain features from your mobile device,
                        including your mobile device&apos;s camera, sms
                        messages, and other features. If you wish to change our
                        access or permissions, you may do so in your
                        device&apos;s settings.
                      </li>
                      <li>
                        <em>Mobile Device Data.</em> We automatically collect
                        device information (such as your mobile device ID,
                        model, and manufacturer), operating system, version
                        information and system configuration information, device
                        and application identification numbers, browser type and
                        version, hardware model Internet service provider and/or
                        mobile carrier, and Internet Protocol (IP) address (or
                        proxy server). If you are using our application(s), we
                        may also collect information about the phone network
                        associated with your mobile device, your mobile
                        device&apos;s operating system or platform, the type of
                        mobile device you use, your mobile device&apos;s unique
                        device ID, and information about the features of our
                        application(s) you accessed.
                      </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed my-4">
                      This information is primarily needed to maintain the
                      security and operation of our application(s), for
                      troubleshooting, and for our internal analytics and
                      reporting purposes.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      All personal information that you provide to us must be
                      true, complete, and accurate, and you must notify us of
                      any changes to such personal information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Information automatically collected
                    </h3>
                    <p className="text-gray-700 italic leading-relaxed mb-4">
                      <strong>In Short:</strong> Some information — such as your
                      Internet Protocol (IP) address and/or browser and device
                      characteristics — is collected automatically when you
                      visit our Services.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We automatically collect certain information when you
                      visit, use, or navigate the Services. This information
                      does not reveal your specific identity (like your name or
                      contact information) but may include device and usage
                      information, such as your IP address, browser and device
                      characteristics, operating system, language preferences,
                      referring URLs, device name, country, location,
                      information about how and when you use our Services, and
                      other technical information. This information is primarily
                      needed to maintain the security and operation of our
                      Services, and for our internal analytics and reporting
                      purposes.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Like many businesses, we also collect information through
                      cookies and similar technologies.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The information we collect includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                      <li>
                        <em>Log and Usage Data.</em> Log and usage data is
                        service-related, diagnostic, usage, and performance
                        information our servers automatically collect when you
                        access or use our Services and which we record in log
                        files. Depending on how you interact with us, this log
                        data may include your IP address, device information,
                        browser type, and settings and information about your
                        activity in the Services (such as the date/time stamps
                        associated with your usage, pages and files viewed,
                        searches, and other actions you take such as which
                        features you use), device event information (such as
                        system activity, error reports (sometimes called
                        &quot;crash dumps&quot;), and hardware settings).
                      </li>
                      <li>
                        <em>Device Data.</em> We collect device data such as
                        information about your computer, phone, tablet, or other
                        device you use to access the Services. Depending on the
                        device used, this device data may include information
                        such as your IP address (or proxy server), device and
                        application identification numbers, location, browser
                        type, hardware model, Internet service provider and/or
                        mobile carrier, operating system, and system
                        configuration information.
                      </li>
                      <li>
                        <em>Location Data.</em> We collect location data such as
                        information about your device&apos;s location, which can
                        be either precise or imprecise. How much information we
                        collect depends on the type and settings of the device
                        you use to access the Services. For example, we may use
                        GPS and other technologies to collect geolocation data
                        that tells us your current location (based on your IP
                        address). You can opt out of allowing us to collect this
                        information either by refusing access to the information
                        or by disabling your Location setting on your device.
                        However, if you choose to opt out, you may not be able
                        to use certain aspects of the Services.
                      </li>
                      <li>
                        <em>Interaction data.</em> We collect data on how you
                        interact with other users and features within the app.
                        This includes likes, swipes, profile views, matches, and
                        chat activity. These signals help us improve matchmaking
                        and ensure a safe, engaging community.
                      </li>
                      <li>
                        <em>Content Data.</em> While we do not scan or sell your
                        private conversations, we may collect metadata related
                        to your activity. This includes message timestamps,
                        frequency of chats, and engagement levels. This data
                        helps us monitor app health, detect misuse, and enhance
                        user experience.
                      </li>
                      <li>
                        <em>Push Notification and preferance data.</em> We track
                        whether you opt in or out of push notifications, emails,
                        and in-app prompts. We may also log your interactions
                        with reminders, match suggestions, or promotional
                        campaigns.
                      </li>
                      <li>
                        <em>Analytics &amp; Performance Data.</em> To improve
                        stability and performance, we collect crash reports,
                        error logs, and aggregated analytics on how features are
                        being used.
                      </li>
                      <li>
                        <em>Behavioral Data (Derived for Recommendations).</em>{" "}
                        We may derive insights based on your in-app behavior,
                        such as the types of profiles you engage with most. This
                        data helps power our personality-based matching
                        algorithm, refine recommendations, and personalize your
                        experience.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Google API
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our use of information received from Google APIs will
                      adhere to{" "}
                      <a
                        href="https://developers.google.com/terms/api-services-user-data-policy"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google API Services User Data Policy
                      </a>
                      , including the{" "}
                      <a
                        href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Limited Use requirements
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </section>

              <section id="how-do-we-process-your-information">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. HOW DO WE PROCESS YOUR INFORMATION?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  <strong>In Short:</strong> We process your information to
                  provide, improve, and administer our Services, communicate
                  with you, for security and fraud prevention, and to comply
                  with law. We process the personal information for the
                  following purposes listed below. We may also process your
                  information for other purposes only with your prior explicit
                  consent.
                </p>
                <p className="text-gray-700 font-bold leading-relaxed mb-4">
                  We process your personal information for a variety of reasons,
                  depending on how you interact with our Services, including:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>
                    <strong>
                      To facilitate account creation and authentication and
                      otherwise manage user accounts.
                    </strong>{" "}
                    We may process your information so you can create and log in
                    to your account, as well as keep your account in working
                    order.
                  </li>
                  <li>
                    <strong>
                      To deliver and facilitate delivery of services to the
                      user.
                    </strong>{" "}
                    We may process your information to provide you with the
                    requested service.
                  </li>
                  <li>
                    <strong>
                      To respond to user inquiries/offer support to users.
                    </strong>{" "}
                    We may process your information to respond to your inquiries
                    and solve any potential issues you might have with the
                    requested service.
                  </li>
                  <li>
                    <strong>To send administrative information to you.</strong>{" "}
                    We may process your information to send you details about
                    our products and services, changes to our terms and
                    policies, and other similar information.
                  </li>
                  <li>
                    <strong>To fulfill and manage your orders.</strong> We may
                    process your information to fulfill and manage your orders,
                    payments, returns, and exchanges made through the Services.
                  </li>
                  <li>
                    <strong>To enable user-to-user communications.</strong> We
                    may process your information if you choose to use any of our
                    offerings that allow for communication with another user.
                  </li>
                  <li>
                    <strong>To request feedback.</strong> We may process your
                    information when necessary to request feedback and to
                    contact you about your use of our Services.
                  </li>
                  <li>
                    <strong>
                      To send you marketing and promotional communications.
                    </strong>{" "}
                    We may process the personal information you send to us for
                    our marketing purposes, if this is in accordance with your
                    marketing preferences. You can opt out of our marketing
                    emails at any time. For more information, see{" "}
                    <a
                      href="/privacy-policy/#what-are-your-privacy-rights"
                      className="text-blue-600 hover:underline"
                    >
                      &quot;WHAT ARE YOUR PRIVACY RIGHTS?&quot;
                    </a>{" "}
                    below.
                  </li>
                  <li>
                    <strong>To protect our Services.</strong> We may process
                    your information as part of our efforts to keep our Services
                    safe and secure, including fraud monitoring and prevention.
                  </li>
                  <li>
                    <strong>To identify usage trends.</strong> We may process
                    information about how you use our Services to better
                    understand how they are being used so we can improve them.
                  </li>
                  <li>
                    <strong>
                      To save or protect an individual&apos;s vital interest.
                    </strong>{" "}
                    We may process your information when necessary to save or
                    protect an individual&apos;s vital interest, such as to
                    prevent harm.
                  </li>
                  <li>
                    <strong>
                      To improve and personalize the user experience.
                    </strong>{" "}
                    Detecting suspicious activity, preventing abuse, and keeping
                    the platform safe.
                  </li>
                  <li>
                    <strong>For analytics and product development.</strong>{" "}
                    Aggregated and anonymized data helps improve the app, test
                    new features, and measure engagement.
                  </li>
                  <li>
                    <strong>To comply with legal obligations.</strong>{" "}
                    Maintaining records or reporting as required by law or
                    regulation.
                  </li>
                  <li>
                    <strong>For fraud prevention and security.</strong>{" "}
                    Detecting suspicious activity, preventing abuse, and keeping
                    the platform safe.
                  </li>
                  <li>
                    <strong>For personalization of user experience.</strong>
                  </li>
                  <li>
                    <strong>
                      or research and analytics (aggregate and anonymized).
                    </strong>
                  </li>
                </ul>
              </section>

              <section id="what-legal-bases-do-we-rely-on-to-process-your-personal-information">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  <strong>In Short:</strong> We only process your personal
                  information when we believe it is necessary and we have a
                  valid legal reason (i.e., legal basis) to do so under
                  applicable law, like with your consent, to comply with laws,
                  to provide you with services to enter into or fulfill our
                  contractual obligations, to protect your rights, or to fulfill
                  our legitimate business interests.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold italic underline text-gray-900 mb-3">
                      If you are located in the EU or UK, this section applies
                      to you.
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The General Data Protection Regulation (GDPR) and UK GDPR
                      require us to explain the valid legal bases we rely on in
                      order to process your personal information. As such, we
                      may rely on the following legal bases to process your
                      personal information:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 text-gray-700">
                      <li>
                        <strong>Consent.</strong> We may process your
                        information if you have given us permission (i.e.,
                        consent) to use your personal information for a specific
                        purpose. You can withdraw your consent at any time.{" "}
                        <a
                          href="/privacy-policy/#withdrawing-your-consent"
                          className="text-blue-600 hover:underline"
                        >
                          Learn more about withdrawing your consent.
                        </a>
                      </li>
                      <li>
                        <strong>Performance of a Contract.</strong> We may
                        process your personal information when we believe it is
                        necessary to fulfill our contractual obligations to you,
                        including providing our Services or at your request
                        prior to entering into a contract with you.
                      </li>
                      <li>
                        <strong>Legitimate Interests.</strong> We may process
                        your information when we believe it is reasonably
                        necessary to achieve our legitimate business interests
                        and those interests do not outweigh your interests and
                        fundamental rights and freedoms. For example, we may
                        process your personal information for some of the
                        purposes described in order to:
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>
                            Send users information about special offers and
                            discounts on our products and services
                          </li>
                          <li>
                            Analyze how our Services are used so we can improve
                            them to engage and retain users
                          </li>
                          <li>
                            Diagnose problems and/or prevent fraudulent
                            activities
                          </li>
                          <li>
                            Understand how our users use our products and
                            services so we can improve user experience
                          </li>
                          <li>
                            To tailor matches and suggestions based on user
                            preferences and behavior.
                          </li>
                          <li>
                            To understand trends, retention, and feature
                            performance without identifying individuals.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Legal Obligations.</strong> We may process your
                        information where we believe it is necessary for
                        compliance with our legal obligations, such as to
                        cooperate with a law enforcement body or regulatory
                        agency, exercise or defend our legal rights, or disclose
                        your information as evidence in litigation in which we
                        are involved.
                      </li>
                      <li>
                        <strong>Vital Interests.</strong> We may process your
                        information where we believe it is necessary to protect
                        your vital interests or the vital interests of a third
                        party, such as situations involving potential threats to
                        the safety of any person.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold italic underline text-gray-900 mb-3">
                      If you are located in Canada, this section applies to you.
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We may process your information if you have given us
                      specific permission (i.e., express consent) to use your
                      personal information for a specific purpose, or in
                      situations where your permission can be inferred (i.e.,
                      implied consent). You can{" "}
                      <a
                        href="/privacy-policy/#withdraw-your-consent"
                        className="text-blue-600 hover:underline"
                      >
                        withdraw your consent
                      </a>{" "}
                      at any time.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      In some exceptional cases, we may be legally permitted
                      under applicable law to process your information without
                      your consent, including, for example:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>
                        If collection is clearly in the interests of an
                        individual and consent cannot be obtained in a timely
                        way
                      </li>
                      <li>
                        For investigations and fraud detection and prevention
                      </li>
                      <li>
                        For business transactions provided certain conditions
                        are met
                      </li>
                      <li>
                        If it is contained in a witness statement and the
                        collection is necessary to assess, process, or settle an
                        insurance claim
                      </li>
                      <li>
                        For identifying injured, ill, or deceased persons and
                        communicating with next of kin
                      </li>
                      <li>
                        If we have reasonable grounds to believe an individual
                        has been, is, or may be victim of financial abuse
                      </li>
                      <li>
                        If it is reasonable to expect collection and use with
                        consent would compromise the availability or the
                        accuracy of the information and the collection is
                        reasonable for purposes related to investigating a
                        breach of an agreement or a contravention of the laws of
                        Canada or a province
                      </li>
                      <li>
                        If disclosure is required to comply with a subpoena,
                        warrant, court order, or rules of the court relating to
                        the production of records
                      </li>
                      <li>
                        If it was produced by an individual in the course of
                        their employment, business, or profession and the
                        collection is consistent with the purposes for which the
                        information was produced
                      </li>
                      <li>
                        If the collection is solely for journalistic, artistic,
                        or literary purposes
                      </li>
                      <li>
                        If the information is publicly available and is
                        specified by the regulations
                      </li>
                      <li>
                        We may disclose de-identified information for approved
                        research or statistics projects, subject to ethics
                        oversight and confidentiality commitments
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="when-and-with-whom-do-we-share-your-personal-information">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  <strong>In Short:</strong> We may share information in
                  specific situations described in this section and/or with the
                  following third parties.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may need to share your personal information in the
                  following situations:
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-700">
                  <li>
                    <strong>Business Transfers.</strong> We may share or
                    transfer your information in connection with, or during
                    negotiations of, any merger, sale of company assets,
                    financing, or acquisition of all or a portion of our
                    business to another company.
                  </li>
                  <li>
                    <strong>When we use Google Maps Platform APIs.</strong> We
                    may share your information with certain Google Maps Platform
                    APIs (e.g., Google Maps API, Places API). We use certain
                    Google Maps Platform APIs to retrieve certain information
                    when you make location-specific requests. This includes:
                    Yes, Google may collect certain usage and location data as
                    part of the Maps API implementation.; and other similar
                    information. A full list of what we use information for can
                    be found in this section and in the previous section titled{" "}
                    <a
                      href="/privacy-policy/#how-do-we-process-your-information"
                      className="text-blue-600 hover:underline"
                    >
                      &quot;HOW DO WE PROCESS YOUR INFORMATION?&quot;
                    </a>{" "}
                    Google Maps uses GPS, Wi-Fi, and cell towers to estimate
                    your location. GPS is accurate to about 20 meters, while
                    Wi-Fi and cell towers help improve accuracy when GPS signals
                    are weak, like indoors. This data helps Google Maps provide
                    directions, but it is not always perfectly precise. The
                    Google Maps Platform APIs that we use store and access
                    cookies and other information on your devices. If you are a
                    user currently in the European Economic Area (EU countries,
                    Iceland, Liechtenstein, and Norway) or the United Kingdom,
                    please take a look at our{" "}
                    <a
                      href="/privacy-policy/#cookie-notice"
                      className="text-blue-600 hover:underline"
                    >
                      Cookie Notice
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Other Users.</strong> When you share personal
                    information (for example, by posting comments,
                    contributions, or other content to the Services) or
                    otherwise interact with public areas of the Services, such
                    personal information may be viewed by all users and may be
                    publicly made available outside the Services in perpetuity.
                    If you interact with other users of our Services and
                    register for our Services through a social network (such as
                    Facebook), your contacts on the social network will see your
                    name, profile photo, and descriptions of your activity.
                    Similarly, other users will be able to view descriptions of
                    your activity, communicate with you within our Services, and
                    view your profile.
                  </li>
                </ul>
              </section>

              <section id="do-we-use-cookies-and-other-tracking-technologies">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  <strong>In Short:</strong> We may use cookies and other
                  tracking technologies to collect and store your information.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may use cookies and similar tracking technologies (like web
                  beacons and pixels) to gather information when you interact
                  with our Services. Some online tracking technologies help us
                  maintain the security of our Services and your account,
                  prevent crashes, fix bugs, save your preferences, and assist
                  with basic site functions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We also permit third parties and service providers to use
                  online tracking technologies on our Services for analytics and
                  advertising, including to help manage and display
                  advertisements, to tailor advertisements to your interests, or
                  to send abandoned shopping cart reminders (depending on your
                  communication preferences). The third parties and service
                  providers use their technology to provide advertising about
                  products and services tailored to your interests which may
                  appear either on our Services or on other websites.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the extent these online tracking technologies are deemed to
                  be a &quot;sale&quot;/&quot;sharing&quot; (which includes
                  targeted advertising, as defined under the applicable laws)
                  under applicable US state laws, you can opt out of these
                  online tracking technologies by submitting a request as
                  described below under section{" "}
                  <a
                    href="/privacy-policy/#do-united-states-residents-have-specific-privacy-rights"
                    className="text-blue-600 hover:underline"
                  >
                    &quot;DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY
                    RIGHTS?&quot;
                  </a>
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Specific information about how we use such technologies and
                  how you can refuse certain cookies is set out in our{" "}
                  <a
                    href="/privacy-policy/#cookie-notice"
                    className="text-blue-600 hover:underline"
                  >
                    Cookie Notice
                  </a>
                  .
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Google Analytics
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may share your information with Google Analytics to track
                    and analyze the use of the Services. To opt out of being
                    tracked by Google Analytics across the Services, visit{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://tools.google.com/dlpage/gaoptout
                    </a>
                    . For more information on the privacy practices of Google,
                    please visit the{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Privacy &amp; Terms page
                    </a>
                    .
                  </p>
                </div>
              </section>

              <section id="how-do-we-handle-your-social-logins">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  <strong>In Short:</strong> If you choose to register or log in
                  to our Services using a social media account, we may have
                  access to certain information about you.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our Services offer you the ability to register and log in
                  using your third-party social media account details (like your
                  Facebook or X logins). Where you choose to do this, we will
                  receive certain profile information about you from your social
                  media provider. The profile information we receive may vary
                  depending on the social media provider concerned, but will
                  often include your name, email address, friends list, and
                  profile picture, as well as other information you choose to
                  make public on such a social media platform.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We will use the information we receive only for the purposes
                  that are described in this Privacy Notice or that are
                  otherwise made clear to you on the relevant Services. Please
                  note that we do not control, and are not responsible for,
                  other uses of your personal information by your third-party
                  social media provider. We recommend that you review their
                  privacy notice to understand how they collect, use, and share
                  your personal information, and how you can set your privacy
                  preferences on their sites and apps.
                </p>
              </section>

              <section id="is-your-information-transferred-internationally">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  <strong>In Short:</strong> We may transfer, store, and process
                  your information in countries other than your own.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our servers are located in. Regardless of your location,
                  please be aware that your information may be transferred to,
                  stored by, and processed by us in our facilities and in the
                  facilities of the third parties with whom we may share your
                  personal information (see{" "}
                  <a
                    href="/privacy-policy/#when-and-with-whom-do-we-share-your-personal-information"
                    className="text-blue-600 hover:underline"
                  >
                    &quot;WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
                    INFORMATION?&quot;
                  </a>{" "}
                  above), including facilities in and other countries.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you are a resident in the European Economic Area (EEA),
                  United Kingdom (UK), or Switzerland, then these countries may
                  not necessarily have data protection laws or other similar
                  laws as comprehensive as those in your country. However, we
                  will take all necessary measures to protect your personal
                  information in accordance with this Privacy Notice and
                  applicable law.
                </p>
                <div>
                  <p className="my-6">
                    European Commission&apos;s Standard Contractual Clauses:
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We have implemented measures to protect your personal
                    information, including by using the European
                    Commission&apos;s Standard Contractual Clauses for transfers
                    of personal information between our group companies and
                    between us and our third-party providers. These clauses
                    require all recipients to protect all personal information
                    that they process originating from the EEA or UK in
                    accordance with European data protection laws and
                    regulations. Our Standard Contractual Clauses can be
                    provided upon request. We have implemented similar
                    appropriate safeguards with our third-party service
                    providers and partners and further details can be provided
                    upon request.
                  </p>
                </div>
              </section>

              <section id="how-long-do-we-keep-your-information">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. HOW LONG DO WE KEEP YOUR INFORMATION?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  <strong>In Short:</strong> We keep your information for as
                  long as necessary to fulfill the purposes outlined in this
                  Privacy Notice unless otherwise required by law.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We will only keep your personal information for as long as it
                  is necessary for the purposes set out in this Privacy Notice,
                  unless a longer retention period is required or permitted by
                  law (such as tax, accounting, or other legal requirements). No
                  purpose in this notice will require us keeping your personal
                  information for longer than six (6) months past the start of
                  the idle period of the user&apos;s account.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When we have no ongoing legitimate business need to process
                  your personal information, we will either delete or anonymize
                  such information, or, if this is not possible (for example,
                  because your personal information has been stored in backup
                  archives), then we will securely store your personal
                  information and isolate it from any further processing until
                  deletion is possible.
                </p>
              </section>

              <section id="how-do-we-keep-your-information-safe">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  9. HOW DO WE KEEP YOUR INFORMATION SAFE?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  <strong>In Short:</strong> We aim to protect your personal
                  information through a system of organizational and technical
                  security measures.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We have implemented appropriate and reasonable technical and
                  organizational security measures designed to protect the
                  security of any personal information we process. However,
                  despite our safeguards and efforts to secure your information,
                  no electronic transmission over the Internet or information
                  storage technology can be guaranteed to be 100% secure, so we
                  cannot promise or guarantee that hackers, cybercriminals, or
                  other unauthorized third parties will not be able to defeat
                  our security and improperly collect, access, steal, or modify
                  your information. Although we will do our best to protect your
                  personal information, transmission of personal information to
                  and from our Services is at your own risk. You should only
                  access the Services within a secure environment.
                </p>
              </section>

              <section id="do-we-collect-information-from-minors">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  10. DO WE COLLECT INFORMATION FROM MINORS?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  <strong>In Short:</strong> We do not knowingly collect data
                  from or market to minors.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Eligibility</strong> Our services are intended only
                  for individuals 18 years of age or older. By creating an
                  account or using FindABohra (&quot;FAB&quot;), you confirm
                  that you are at least 18 years old and legally eligible to
                  marry under the laws of your jurisdiction.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Minors</strong> FAB does not knowingly collect or
                  store personal information from individuals under the age of
                  18. If we become aware that we have inadvertently collected
                  personal information from a minor, we will take steps to
                  delete such information promptly.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Parental Access</strong> If you are a parent or
                  guardian and believe that your child under 18 has provided
                  personal data to us, please contact us immediately so we can
                  delete the account and associated data.
                </p>
              </section>

              <section id="what-are-your-privacy-rights">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  11. WHAT ARE YOUR PRIVACY RIGHTS?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  <strong>In Short:</strong> Depending on your state of
                  residence in the US or in some regions, such as the European
                  Economic Area (EEA), United Kingdom (UK), Switzerland, and
                  Canada, you have rights that allow you greater access to and
                  control over your personal information. You may review,
                  change, or terminate your account at any time, depending on
                  your country, province, or state of residence.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In some regions (like the EEA, UK, Switzerland, and Canada),
                  you have certain rights under applicable data protection laws.
                  These may include the right (i) to request access and obtain a
                  copy of your personal information, (ii) to request
                  rectification or erasure; (iii) to restrict the processing of
                  your personal information; (iv) if applicable, to data
                  portability; and (v) not to be subject to automated
                  decision-making. If a decision that produces legal or
                  similarly significant effects is made solely by automated
                  means, we will inform you, explain the main factors, and offer
                  a simple way to request human review. In certain
                  circumstances, you may also have the right to object to the
                  processing of your personal information. You can make such a
                  request by contacting us by using the contact details provided
                  in the section{" "}
                  <a
                    href="/privacy-policy/#how-can-you-contact-us-about-this-notice"
                    className="text-blue-600 hover:underline"
                  >
                    &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot;
                  </a>{" "}
                  below.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We will consider and act upon any request in accordance with
                  applicable data protection laws.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you are located in the EEA or UK and you believe we are
                  unlawfully processing your personal information, you also have
                  the right to complain to your Member State data protection
                  authority or UK data protection authority.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you are located in Switzerland, you may contact the Federal
                  Data Protection and Information Commissioner.
                </p>
                <div>
                  <h3 className="text-xl font-semibold underline text-gray-900 mb-3">
                    Withdrawing your consent:
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If we are relying on your consent to process your personal
                    information, which may be express and/or implied consent
                    depending on the applicable law, you have the right to
                    withdraw your consent at any time. You can withdraw your
                    consent at any time by contacting us by using the contact
                    details provided in the section{" "}
                    <a
                      href="/privacy-policy/#how-can-you-contact-us-about-this-notice"
                      className="text-blue-600 hover:underline"
                    >
                      &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot;
                    </a>{" "}
                    below or updating your preferences.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    However, please note that this will not affect the
                    lawfulness of the processing before its withdrawal nor, when
                    applicable law allows, will it affect the processing of your
                    personal information conducted in reliance on lawful
                    processing grounds other than consent.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold underline text-gray-900 mb-3">
                    Opting out of marketing and promotional communications:
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You can unsubscribe from our marketing and promotional
                    communications at any time by replying &quot;STOP&quot; or
                    &quot;UNSUBSCRIBE&quot; to the SMS messages that we send, or
                    by contacting us using the details provided in the section{" "}
                    <a
                      href="/privacy-policy/#how-can-you-contact-us-about-this-notice"
                      className="text-blue-600 hover:underline"
                    >
                      &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot;
                    </a>{" "}
                    below. You will then be removed from the marketing lists.
                    However, we may still communicate with you — for example, to
                    send you service-related messages that are necessary for the
                    administration and use of your account, to respond to
                    service requests, or for other non-marketing purposes.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    No mobile information will be shared with third parties or
                    affiliates for marketing or promotional purposes.
                    Information sharing to subcontractors in support services,
                    such as customer service, is permitted. All other use case
                    categories exclude text messaging originator opt-in data and
                    consent; this information will not be shared with third
                    parties.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Account Information</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you would at any time like to review or change the
                  information in your account or terminate your account, you
                  can:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>
                    Log in to your account settings and update your user
                    account.
                  </li>
                  <li>Contact us using the contact information provided.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Upon your request to terminate your account, we will
                  deactivate or delete your account and information from our
                  active databases. However, we may retain some information in
                  our files to prevent fraud, troubleshoot problems, assist with
                  any investigations, enforce our legal terms and/or comply with
                  applicable legal requirements.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Cookies and similar technologies:</strong> Most Web
                  browsers are set to accept cookies by default. If you prefer,
                  you can usually choose to set your browser to remove cookies
                  and to reject cookies. If you choose to remove cookies or
                  reject cookies, this could affect certain features or services
                  of our Services.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions or comments about your privacy rights,
                  you may email us at{" "}
                  <a
                    href="mailto:support@findabohra.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@findabohra.com
                  </a>
                  .
                </p>
              </section>

              <section id="controls-for-do-not-track-features">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  12. CONTROLS FOR DO-NOT-TRACK FEATURES
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most web browsers and some mobile operating systems and mobile
                  applications include a Do-Not-Track (&quot;DNT&quot;) feature
                  or setting you can activate to signal your privacy preference
                  not to have data about your online browsing activities
                  monitored and collected. At this stage, no uniform technology
                  standard for recognizing and implementing DNT signals has been
                  finalized. As such, we do not currently respond to DNT browser
                  signals or any other mechanism that automatically communicates
                  your choice not to be tracked online. If a standard for online
                  tracking is adopted that we must follow in the future, we will
                  inform you about that practice in a revised version of this
                  Privacy Notice.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  California law requires us to let you know how we respond to
                  web browser DNT signals. Because there currently is not an
                  industry or legal standard for recognizing or honoring DNT
                  signals, we do not respond to them at this time.
                </p>
              </section>

              <section id="do-united-states-residents-have-specific-privacy-rights">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  13. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  <strong>In Short:</strong> If you are a resident of
                  California, Colorado, Connecticut, Delaware, Florida, Indiana,
                  Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New
                  Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas,
                  Utah, or Virginia, you may have the right to request access to
                  and receive details about the personal information we maintain
                  about you and how we have processed it, correct inaccuracies,
                  get a copy of, or delete your personal information. You may
                  also have the right to withdraw your consent to our processing
                  of your personal information. These rights may be limited in
                  some circumstances by applicable law. More information is
                  provided below.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Categories of Personal Information We Collect
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The table below shows the categories of personal
                      information we have collected in the past twelve (12)
                      months. The table includes illustrative examples of each
                      category and does not reflect the personal information we
                      collect from you. For a comprehensive inventory of all
                      personal information we process, please refer to the
                      section{" "}
                      <a
                        href="/privacy-policy/#what-information-do-we-collect"
                        className="text-blue-600 hover:underline"
                      >
                        &quot;WHAT INFORMATION DO WE COLLECT?&quot;
                      </a>
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-300">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                              Category
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                              Examples
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                              Collected
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">
                              A. Identifiers
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              Contact details, such as real name, alias, postal
                              address, telephone or mobile contact number,
                              unique personal identifier, online identifier,
                              Internet Protocol address, email address, and
                              account name
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              NO
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">
                              B. Personal information as defined in the
                              California Customer Records statute
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              Name, contact information, education, employment,
                              employment history, and financial information
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              NO
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">
                              C. Protected classification characteristics under
                              state or federal law
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              Gender, age, date of birth, race and ethnicity,
                              national origin, marital status, and other
                              demographic data
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              NO
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">
                              D. Commercial information
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              Transaction information, purchase history,
                              financial details, and payment information
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              NO
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">
                              E. Biometric information
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              Fingerprints and voiceprints
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              NO
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">
                              F. Internet or other similar network activity
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              Browsing history, search history, online behavior,
                              interest data, and interactions with our and other
                              websites, applications, systems, and
                              advertisements
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              NO
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">
                              G. Geolocation data
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              Device location
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              NO
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">
                              H. Audio, electronic, sensory, or similar
                              information
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              Images and audio, video or call recordings created
                              in connection with our business activities
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              NO
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">
                              I. Professional or employment-related information
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              Business contact details in order to provide you
                              our Services at a business level or job title,
                              work history, and professional qualifications if
                              you apply for a job with us
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              NO
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">
                              J. Education Information
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              Student records and directory information
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              NO
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">
                              K. Inferences drawn from collected personal
                              information
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              Inferences drawn from any of the collected
                              personal information listed above to create a
                              profile or summary about, for example, an
                              individual&apos;s preferences and characteristics
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              NO
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">
                              L. Sensitive personal Information
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              Account login information, biometric data,
                              drivers&apos; licenses, religious or philosophical
                              beliefs and sex life or sexual orientation
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              YES
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      We only collect sensitive personal information, as defined
                      by applicable privacy laws or the purposes allowed by law
                      or with your consent. Sensitive personal information may
                      be used, or disclosed to a service provider or contractor,
                      for additional, specified purposes. You may have the right
                      to limit the use or disclosure of your sensitive personal
                      information. We do not collect or process sensitive
                      personal information for the purpose of inferring
                      characteristics about you.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We may also collect other personal information outside of
                      these categories through instances where you interact with
                      us in person, online, or by phone or mail in the context
                      of:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li className="text-gray-700 leading-relaxed">
                        Receiving help through our customer support channels;
                      </li>
                      <li className="text-gray-700 leading-relaxed">
                        Participation in customer surveys or contests; and
                      </li>
                      <li className="text-gray-700 leading-relaxed">
                        Facilitation in the delivery of our Services and to
                        respond to your inquiries.
                      </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We will use and retain the collected personal information
                      as needed to provide the Services or for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li className="text-gray-700 leading-relaxed">
                        Category H - We do not collect sensory data
                      </li>
                      <li className="text-gray-700 leading-relaxed">
                        Category L - As long as the user has an account with us
                      </li>
                    </ul>
                    <div className="p-4 bg-blue-50 rounded-lg mt-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Sources of Personal Information
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Learn more about the sources of personal information we
                        collect in{" "}
                        <a
                          href="/privacy-policy/#what-information-do-we-collect"
                          className="text-blue-600 hover:underline"
                        >
                          &quot;WHAT INFORMATION DO WE COLLECT?&quot;
                        </a>
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg mt-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        How We Use and Share Personal Information
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Learn more about how we use your personal information in
                        the section,{" "}
                        <a
                          href="/privacy-policy/#how-do-we-process-your-information"
                          className="text-blue-600 hover:underline"
                        >
                          &quot;HOW DO WE PROCESS YOUR INFORMATION?&quot;
                        </a>
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg mt-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Will your information be shared with anyone else?
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        We may disclose your personal information with our
                        service providers pursuant to a written contract between
                        us and each service provider. Learn more about how we
                        disclose personal information to in the section,{" "}
                        <a
                          href="/privacy-policy/#when-and-with-whom-do-we-share-your-personal-information"
                          className="text-blue-600 hover:underline"
                        >
                          &quot;WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
                          INFORMATION?&quot;
                        </a>
                      </p>
                    </div>
                    <p className="text-gray-700 leading-relaxed mt-6 mb-4">
                      We may use your personal information for our own business
                      purposes, such as for undertaking internal research for
                      technological development and demonstration. This is not
                      considered to be &quot;selling&quot; of your personal
                      information.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We have not disclosed, sold, or shared any personal
                      information to third parties for a business or commercial
                      purpose in the preceding twelve (12) months. We will not
                      sell or share personal information in the future belonging
                      to website visitors, users, and other consumers.
                    </p>
                    <div className="p-4 bg-gray-50 rounded-lg mt-6">
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Your Rights
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        You have rights under certain US state data protection
                        laws. However, these rights are not absolute, and in
                        certain cases, we may decline your request as permitted
                        by law. These rights include:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li className="text-gray-700 leading-relaxed">
                          Right to know whether or not we are processing your
                          personal data
                        </li>
                        <li className="text-gray-700 leading-relaxed">
                          Right to access your personal data
                        </li>
                        <li className="text-gray-700 leading-relaxed">
                          Right to correct inaccuracies in your personal data
                        </li>
                        <li className="text-gray-700 leading-relaxed">
                          Right to request the deletion of your personal data
                        </li>
                        <li className="text-gray-700 leading-relaxed">
                          Right to obtain a copy of the personal data you
                          previously shared with us
                        </li>
                        <li className="text-gray-700 leading-relaxed">
                          Right to non-discrimination for exercising your rights
                        </li>
                        <li className="text-gray-700 leading-relaxed">
                          Right to opt out of the processing of your personal
                          data if it is used for targeted advertising (or
                          sharing as defined under California&apos;s privacy
                          law), the sale of personal data, or profiling in
                          furtherance of decisions that produce legal or
                          similarly significant effects (&quot;profiling&quot;)
                        </li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Depending upon the state where you live, you may also
                        have the following rights:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li className="text-gray-700 leading-relaxed">
                          Right to access the categories of personal data being
                          processed (as permitted by applicable law, including
                          the privacy law in Minnesota)
                        </li>
                        <li className="text-gray-700 leading-relaxed">
                          Right to obtain a list of the categories of third
                          parties to which we have disclosed personal data (as
                          permitted by applicable law, including the privacy law
                          in California, Delaware, and Maryland)
                        </li>
                        <li className="text-gray-700 leading-relaxed">
                          Right to obtain a list of specific third parties to
                          which we have disclosed personal data (as permitted by
                          applicable law, including the privacy law in Minnesota
                          and Oregon)
                        </li>
                        <li className="text-gray-700 leading-relaxed">
                          Right to review, understand, question, and correct how
                          personal data has been profiled (as permitted by
                          applicable law, including the privacy law in
                          Minnesota)
                        </li>
                        <li className="text-gray-700 leading-relaxed">
                          Right to limit use and disclosure of sensitive
                          personal data (as permitted by applicable law,
                          including the privacy law in California)
                        </li>
                        <li className="text-gray-700 leading-relaxed">
                          Right to opt out of the collection of sensitive data
                          and personal data collected through the operation of a
                          voice or facial recognition feature (as permitted by
                          applicable law, including the privacy law in Florida)
                        </li>
                      </ul>
                      <h4 className="font-semibold text-gray-900 mb-3 mt-6">
                        How to Exercise Your Rights
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        To exercise these rights, you can contact us by
                        submitting a data subject access request, by emailing us
                        at{" "}
                        <a
                          href="mailto:support@findabohra.com"
                          className="text-blue-600 hover:underline"
                        >
                          support@findabohra.com
                        </a>
                        , or by referring to the contact details at the bottom
                        of this document.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Under certain US state data protection laws, you can
                        designate an authorized agent to make a request on your
                        behalf. We may deny a request from an authorized agent
                        that does not submit proof that they have been validly
                        authorized to act on your behalf in accordance with
                        applicable laws.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3 mt-6">
                        Request Verification
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Upon receiving your request, we will need to verify your
                        identity to determine you are the same person about whom
                        we have the information in our system. We will only use
                        personal information provided in your request to verify
                        your identity or authority to make the request. However,
                        if we cannot verify your identity from the information
                        already maintained by us, we may request that you
                        provide additional information for the purposes of
                        verifying your identity and for security or
                        fraud-prevention purposes.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        If you submit the request through an authorized agent,
                        we may need to collect additional information to verify
                        your identity before processing your request and the
                        agent will need to provide a written and signed
                        permission from you to submit such request on your
                        behalf.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3 mt-6">
                        Appeals
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Under certain US state data protection laws, if we
                        decline to take action regarding your request, you may
                        appeal our decision by emailing us at{" "}
                        <a
                          href="mailto:support@findabohra.com"
                          className="text-blue-600 hover:underline"
                        >
                          support@findabohra.com
                        </a>
                        . We will inform you in writing of any action taken or
                        not taken in response to the appeal, including a written
                        explanation of the reasons for the decisions. If your
                        appeal is denied, you may submit a complaint to your
                        state attorney general.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3 mt-6">
                        California &quot;Shine The Light&quot; Law
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        California Civil Code Section 1798.83, also known as the
                        &quot;Shine The Light&quot; law, permits our users who
                        are California residents to request and obtain from us,
                        once a year and free of charge, information about
                        categories of personal information (if any) we disclosed
                        to third parties for direct marketing purposes and the
                        names and addresses of all third parties with which we
                        shared personal information in the immediately preceding
                        calendar year. If you are a California resident and
                        would like to make such a request, please submit your
                        request in writing to us by using the contact details
                        provided in the section{" "}
                        <a
                          href="/privacy-policy/#how-can-you-contact-us-about-this-notice"
                          className="text-blue-600 hover:underline"
                        >
                          &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot;
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="do-other-regions-have-specific-privacy-rights">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  14. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  <strong>In Short:</strong> You may have additional rights
                  based on the country you reside in.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Australia and New Zealand
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We collect and process your personal information under the
                      obligations and conditions set by Australia&apos;s Privacy
                      Act 1988 and New Zealand&apos;s Privacy Act 2020 (Privacy
                      Act).
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      This Privacy Notice satisfies the notice requirements
                      defined in both Privacy Acts, in particular: what personal
                      information we collect from you, from which sources, for
                      which purposes, and other recipients of your personal
                      information.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      If you do not wish to provide the personal information
                      necessary to fulfill their applicable purpose, it may
                      affect our ability to provide our services, in particular:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                      <li className="text-gray-700 leading-relaxed">
                        offer you the products or services that you want
                      </li>
                      <li className="text-gray-700 leading-relaxed">
                        respond to or help with your requests
                      </li>
                      <li className="text-gray-700 leading-relaxed">
                        manage your account with us
                      </li>
                      <li className="text-gray-700 leading-relaxed">
                        confirm your identity and protect your account
                      </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      At any time, you have the right to request access to or
                      correction of your personal information. You can make such
                      a request by contacting us by using the contact details
                      provided in the section{" "}
                      <a
                        href="/privacy-policy/#how-can-you-review-update-or-delete-the-data-we-collect-from-you"
                        className="text-blue-600 hover:underline"
                      >
                        &quot;HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                        COLLECT FROM YOU?&quot;
                      </a>
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      If you believe we are unlawfully processing your personal
                      information, you have the right to submit a complaint
                      about a breach of the Australian Privacy Principles to the
                      Office of the Australian Information Commissioner and a
                      breach of New Zealand&apos;s Privacy Principles to the
                      Office of New Zealand Privacy Commissioner.
                    </p>
                  </div>
                </div>
              </section>

              <section id="do-we-make-updates-to-this-notice">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  15. DO WE MAKE UPDATES TO THIS NOTICE?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  <strong>In Short:</strong> Yes, we will update this notice as
                  necessary to stay compliant with relevant laws.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update this Privacy Notice from time to time. The
                  updated version will be indicated by an updated
                  &quot;Revised&quot; date at the top of this Privacy Notice. If
                  we make material changes to this Privacy Notice, we may notify
                  you either by prominently posting a notice of such changes or
                  by directly sending you a notification. We encourage you to
                  review this Privacy Notice frequently to be informed of how we
                  are protecting your information.
                </p>
              </section>

              <section id="how-can-you-contact-us-about-this-notice">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions or comments about this notice, you may
                  email us at{" "}
                  <a
                    href="mailto:support@findabohra.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@findabohra.com
                  </a>{" "}
                  or contact us by post at:
                </p>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    FindABohra
                    <br />
                    26 Ave at Port Imperial
                    <br />
                    Apt 108
                    <br />
                    West New York, NJ 07093
                    <br />
                    United States
                  </p>
                </div>
              </section>

              <section id="how-can-you-review-update-or-delete-the-data-we-collect-from-you">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  17. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                  FROM YOU?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Based on the applicable laws of your country or state of
                  residence in the US, you may have the right to request access
                  to the personal information we collect from you, details about
                  how we have processed it, correct inaccuracies, or delete your
                  personal information. You may also have the right to withdraw
                  your consent to our processing of your personal information.
                  These rights may be limited in some circumstances by
                  applicable law. To request to review, update, or delete your
                  personal information, please fill out and submit a{" "}
                  <a
                    href="/privacy-policy/#data-subject-access-request"
                    className="text-blue-600 hover:underline"
                  >
                    data subject access request
                  </a>
                  .
                </p>
              </section>

              <section id="controls-for-do-not-track-features">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Controls for Do-Not-Track Features
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Most web browsers and some mobile operating systems and mobile
                  applications include a Do-Not-Track (&quot;DNT&quot;) feature
                  or setting you can activate to signal your privacy preference
                  not to have data about your online browsing activities
                  monitored and collected. At this stage no uniform technology
                  standard for recognizing and implementing DNT signals has been
                  finalized.
                </p>
              </section>

              <section id="do-we-make-updates-to-this-notice">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Do We Make Updates to This Notice?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this privacy notice from time to time. The
                  updated version will be indicated by an updated
                  &quot;Revised&quot; date and the updated version will be
                  effective as soon as it is accessible. If we make material
                  changes to this privacy notice, we may notify you either by
                  prominently posting a notice of such changes or by directly
                  sending you a notification.
                </p>
              </section>

              <section id="how-can-you-review-update-or-delete-the-data-we-collect-from-you">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  How Can You Review, Update, or Delete The Data We Collect From
                  You?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Based on the applicable laws of your country, you may have the
                  right to request access to the personal information we collect
                  from you, change that information, or delete it in some
                  circumstances. To request to review, update, or delete your
                  personal information, please submit a request by contacting us
                  at{" "}
                  <a
                    href="mailto:support@findabohra.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@findabohra.com
                  </a>
                  .
                </p>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Account Management
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    You can also manage your account information directly
                    through your FindABohra profile settings. This includes
                    updating your personal details, changing your privacy
                    preferences, and managing your communication settings.
                  </p>
                </div>
              </section>

              <section id="how-can-you-contact-us-about-this-notice">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  How Can You Contact Us About This Notice?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions or comments about this notice, you may
                  contact us by:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>FindABohra</strong>
                  </p>
                  <p className="text-gray-700 mb-2">26 Ave at Port Imperial</p>
                  <p className="text-gray-700 mb-2">Apt 108</p>
                  <p className="text-gray-700 mb-2">West New York, NJ 07093</p>
                  <p className="text-gray-700 mb-2">United States</p>
                  <p className="text-gray-700">
                    Email:{" "}
                    <a
                      href="mailto:support@findabohra.com"
                      className="text-blue-600 hover:underline"
                    >
                      support@findabohra.com
                    </a>
                  </p>
                </div>
              </section>

              <section id="categories-of-personal-information-we-collect">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Categories of Personal Information We Collect
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The table below shows the categories of personal information
                  we have collected in the past twelve (12) months. The table
                  includes illustrative examples of each category and does not
                  reflect the personal information we collect from you. For a
                  comprehensive inventory of all personal information we
                  process, please refer to the section{" "}
                  <a
                    href="/privacy-policy/#what-information-do-we-collect"
                    className="text-blue-600 hover:underline"
                  >
                    &quot;WHAT INFORMATION DO WE COLLECT?&quot;
                  </a>
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                          Category
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                          Examples
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                          Collected
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          A. Identifiers
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Contact details, such as real name, alias, postal
                          address, telephone or mobile contact number, unique
                          personal identifier, online identifier, Internet
                          Protocol address, email address, and account name
                        </td>
                        <td className="border border-gray-300 px-4 py-2">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          B. Personal information as defined in the California
                          Customer Records statute
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Name, contact information, education, employment,
                          employment history, and financial information
                        </td>
                        <td className="border border-gray-300 px-4 py-2">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          C. Protected classification characteristics under
                          state or federal law
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Gender, age, date of birth, race and ethnicity,
                          national origin, marital status, and other demographic
                          data
                        </td>
                        <td className="border border-gray-300 px-4 py-2">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          D. Commercial information
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Transaction information, purchase history, financial
                          details, and payment information
                        </td>
                        <td className="border border-gray-300 px-4 py-2">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          E. Biometric information
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Fingerprints and voiceprints
                        </td>
                        <td className="border border-gray-300 px-4 py-2">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          F. Internet or other similar network activity
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Browsing history, search history, online behavior,
                          interest data, and interactions with our and other
                          websites, applications, systems, and advertisements
                        </td>
                        <td className="border border-gray-300 px-4 py-2">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          G. Geolocation data
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Device location
                        </td>
                        <td className="border border-gray-300 px-4 py-2">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          H. Audio, electronic, sensory, or similar information
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Images and audio, video or call recordings created in
                          connection with our business activities
                        </td>
                        <td className="border border-gray-300 px-4 py-2">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          I. Professional or employment-related information
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Business contact details in order to provide you our
                          Services at a business level or job title, work
                          history, and professional qualifications if you apply
                          for a job with us
                        </td>
                        <td className="border border-gray-300 px-4 py-2">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          J. Education Information
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Student records and directory information
                        </td>
                        <td className="border border-gray-300 px-4 py-2">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          K. Inferences drawn from collected personal
                          information
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Inferences drawn from any of the collected personal
                          information listed above to create a profile or
                          summary about, for example, an individual&apos;s
                          preferences and characteristics
                        </td>
                        <td className="border border-gray-300 px-4 py-2">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          L. Sensitive personal Information
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Account login information, biometric data,
                          drivers&apos; licenses, religious or philosophical
                          beliefs and sex life or sexual orientation
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          YES
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 mt-6">
                  We only collect sensitive personal information, as defined by
                  applicable privacy laws or the purposes allowed by law or with
                  your consent. Sensitive personal information may be used, or
                  disclosed to a service provider or contractor, for additional,
                  specified purposes. You may have the right to limit the use or
                  disclosure of your sensitive personal information. We do not
                  collect or process sensitive personal information for the
                  purpose of inferring characteristics about you.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may also collect other personal information outside of
                  these categories through instances where you interact with us
                  in person, online, or by phone or mail in the context of:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Receiving help through our customer support channels;</li>
                  <li>Participation in customer surveys or contests; and</li>
                  <li>
                    Facilitation in the delivery of our Services and to respond
                    to your inquiries.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We will use and retain the collected personal information as
                  needed to provide the Services and for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Category H - We do not collect sensory data</li>
                  <li>
                    Category L - As long as the user has an account with us
                  </li>
                </ul>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Sources of Personal Information
                  </h3>
                </div>
              </section>

              <section id="do-other-regions-have-specific-privacy-rights">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  14. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  <strong>In Short:</strong> You may have additional rights
                  based on the country you reside in.
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Australia and New Zealand
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may collect and process personal information under the
                    Privacy Act 1988 (Cth) of Australia and the Privacy Act 2020
                    of New Zealand (&quot;Privacy Acts&quot;). If you are a
                    resident of Australia or New Zealand, this Privacy Notice
                    fulfills the notice requirements of the Privacy Acts in
                    relation to our collection, use, and disclosure of your
                    personal information. We may not be able to provide you with
                    some of the products and services you request or otherwise
                    engage with you if we have not obtained the necessary
                    personal information from you.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you are a resident of Australia or New Zealand, you have
                    the right to request access to or correction of your
                    personal information. You may contact us about such requests
                    using the contact details provided in the section{" "}
                    <a
                      href="/privacy-policy/#how-can-you-review-update-or-delete-the-data-we-collect-from-you"
                      className="text-blue-600 hover:underline"
                    >
                      &quot;HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                      COLLECT FROM YOU?&quot;
                    </a>{" "}
                    below.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you believe we are unlawfully processing your personal
                    information, you also have the right to submit a complaint
                    about a breach of the Australian Privacy Principles to the{" "}
                    <a
                      href="https://www.oaic.gov.au/privacy/privacy-complaints/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Office of the Australian Information Commissioner
                    </a>{" "}
                    and a breach of New Zealand&apos;s Privacy Principles to the{" "}
                    <a
                      href="https://www.privacy.org.nz/your-rights/how-to-complain/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Office of New Zealand Privacy Commissioner
                    </a>
                    .
                  </p>
                </div>
              </section>

              <section id="do-we-make-updates-to-this-notice">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  15. DO WE MAKE UPDATES TO THIS NOTICE?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  <strong>In Short:</strong> Yes, we will update this notice as
                  necessary to stay compliant with relevant laws.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update this Privacy Notice from time to time. The
                  updated version will be indicated by an updated
                  &quot;Revised&quot; date and the updated version will be
                  effective as soon as it is accessible. If we make material
                  changes to this Privacy Notice, we may notify you either by
                  prominently posting a notice of such changes or by directly
                  sending you a notification. We encourage you to review this
                  Privacy Notice frequently to be informed of how we are
                  protecting your information.
                </p>
              </section>

              <section id="how-can-you-contact-us-about-this-notice">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions or comments about this notice, you may
                  email us at{" "}
                  <a
                    href="mailto:support@findabohra.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@findabohra.com
                  </a>{" "}
                  or contact us by post at:
                </p>
                <div className="text-gray-700 leading-relaxed mb-4">
                  FindABohra
                  <br />
                  26 Ave at Port Imperial
                  <br />
                  Apt 108
                  <br />
                  West New York, NJ 07093
                  <br />
                  United States
                </div>
              </section>

              <section id="how-can-you-review-update-or-delete-the-data-we-collect-from-you">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  17. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                  FROM YOU?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Based on the applicable laws of your country or state of
                  residence in the US, you may have the right to request access
                  to the personal information we collect from you, details about
                  how we have processed it, correct inaccuracies, or delete your
                  personal information. You may also have the right to withdraw
                  your consent to our processing of your personal information.
                  These rights may be limited in some circumstances by
                  applicable law. To request to review, update, or delete your
                  personal information, please fill out and submit a{" "}
                  <a
                    href="/privacy-policy/#data-subject-access-request"
                    className="text-blue-600 hover:underline"
                  >
                    data subject access request
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

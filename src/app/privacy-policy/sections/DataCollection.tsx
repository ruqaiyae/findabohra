export function DataCollection() {
  return (
    <section id="what-information-do-we-collect">
      <h2 className="text-base font-semibold text-gray-900 mb-4">
        1. WHAT INFORMATION DO WE COLLECT?
      </h2>
      <div className="space-y-4 md:space-y-6">
        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            Personal information you disclose to us
          </h3>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
            <strong>In Short:</strong>{" "}
            <em>We collect personal information that you provide to us.</em>
          </p>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
            We collect personal information that you voluntarily provide to us
            when you register on the Services, express an interest in obtaining
            information about us or our products and Services, when you
            participate in activities on the Services, or otherwise when you
            contact us.
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            Personal Information Provided by You.
          </h3>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
            The personal information that we collect depends on the context of
            your interactions with us and the Services, the choices you make,
            and the products and features you use. The personal information we
            collect may include the following:
          </p>
          <ul className="list-disc pl-4 md:pl-6 space-y-2 text-xs md:text-sm text-gray-700 mb-4">
            <li className="text-xs md:text-sm">names</li>
            <li className="text-xs md:text-sm">phone numbers</li>
            <li className="text-xs md:text-sm">email addresses</li>
            <li className="text-xs md:text-sm">job titles</li>
            <li className="text-xs md:text-sm">usernames</li>
            <li className="text-xs md:text-sm">passwords</li>
            <li className="text-xs md:text-sm">
              contact or authentication data
            </li>
            <li className="text-xs md:text-sm">billing addresses</li>
            <li className="text-xs md:text-sm">debit/credit card numbers</li>
            <li className="text-xs md:text-sm">mailing addresses</li>
            <li className="text-xs md:text-sm">
              typical categories fab will collect directly: 1. account basics •
              full name (or display name) • email address • phone number (for
              otp verification) • date of birth (to confirm age eligibility) •
              gender • password/credentials 2. profile information • photos
              (uploaded directly) • location (city, state, country — could also
              include gps if you add location-based features) • community
              background / cultural identifiers (optional, but likely important
              for fab) • personality inputs (your -5 to +5 sliders for traits
              like introvert vs extrovert, planner vs spontaneous, etc.) •
              &quot;about me&quot; bio text 3. preferences • match preferences
              (age range, location, interests, lifestyle values) • notification
              preferences 4. payment information (if subscriptions are paid
              through the app) • credit card / payment provider info (though in
              many cases this is routed through apple/google pay or a
              third-party processor, meaning you don&apos;t store it yourself)
              5. communications • messages, chats, likes, or comments (all
              user-generated content is still &quot;directly provided&quot;). ⸻
              not &quot;directly collected&quot; but often listed separately: •
              device information (ip address, browser type, os) → usually
              &quot;automatically collected&quot; • behavioral data (likes,
              swipes, time on app) → &quot;inferred&quot;
            </li>
          </ul>
        </div>
        <div>
          <p
            id="sensitive-information"
            className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4"
          >
            <span className="font-semibold text-gray-900 mb-3">
              Sensitive Information.{" "}
            </span>
            When necessary, with your consent or as otherwise permitted by
            applicable law, we process the following categories of sensitive
            information:
          </p>
          <ul className="list-disc pl-4 md:pl-6 space-y-2 text-xs md:text-sm text-gray-700 mb-4">
            <li className="text-xs md:text-sm">biometric data</li>
            <li className="text-xs md:text-sm">
              data about a person&apos;s sex life or sexual orientation
            </li>
            <li className="text-xs md:text-sm">
              information revealing race or ethnic origin
            </li>
            <li className="text-xs md:text-sm">
              information revealing religious or philosophical beliefs
            </li>
            <li className="text-xs md:text-sm">credit worthiness data</li>
            <li className="text-xs md:text-sm">
              sensitive information fab collects 1. date of birth / age →
              age-related data is sensitive because it&apos;s tied to
              eligibility (minors must be excluded). 2. gender / sexual
              orientation → collecting gender (and in some cases, preferences
              related to orientation) counts as sensitive under gdpr and other
              privacy frameworks. 3. cultural / religious affiliation (optional
              but relevant for fab) → if users enter details about being dawoodi
              bohra or any other identifiers, this is sensitive data. religious
              and cultural information is highly regulated. 4. photos &amp;
              profile media → because they can reveal race, ethnicity, religious
              attire, and other identifiers, photos are treated as sensitive
              data. 5. personal traits &amp; personality profiling → your slider
              inputs (introvert vs extrovert, traditional vs modern, etc.) are
              behavioral/psychological profiling, which is considered sensitive
              in many jurisdictions. 6. messages / chats → user communications
              are also considered sensitive, since they may contain deeply
              personal or identifying details. not typically sensitive but still
              personal • name, email, phone → standard personal identifiers. •
              payment info → considered financial data, highly protected, but
              usually processed via third-party payment processors.
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold text-gray-900 mb-3">
              Payment Data.{" "}
            </span>
            We may collect data necessary to process your payment if you choose
            to make purchases, such as your payment instrument number, and the
            security code associated with your payment instrument. All payment
            data is handled and stored by{" "}
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
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold text-gray-900 mb-3">
              Social Media Login Data.{" "}
            </span>
            We may provide you with the option to register with us using your
            existing social media account details, like your Facebook, X, or
            other social media account. If you choose to register in this way,
            we will collect certain profile information about you from the
            social media provider, as described in the section called{" "}
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
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold text-gray-900 mb-3">
              Application Data.{" "}
            </span>
            If you use our application(s), we also may collect the following
            information if you choose to provide us with access or permission:
          </p>
          <ul className="list-disc pl-4 md:pl-6 space-y-3 text-xs md:text-sm text-gray-700">
            <li className="text-xs md:text-sm">
              <em>Geolocation Information.</em> We may request access or
              permission to track location-based information from your mobile
              device, either continuously or while you are using our mobile
              application(s), to provide certain location-based services. If you
              wish to change our access or permissions, you may do so in your
              device&apos;s settings.
            </li>
            <li className="text-xs md:text-sm">
              <em>Mobile Device Access.</em> We may request access or permission
              to certain features from your mobile device, including your mobile
              device&apos;s camera, sms messages, and other features. If you
              wish to change our access or permissions, you may do so in your
              device&apos;s settings.
            </li>
            <li className="text-xs md:text-sm">
              <em>Mobile Device Data.</em> We automatically collect device
              information (such as your mobile device ID, model, and
              manufacturer), operating system, version information and system
              configuration information, device and application identification
              numbers, browser type and version, hardware model Internet service
              provider and/or mobile carrier, and Internet Protocol (IP) address
              (or proxy server). If you are using our application(s), we may
              also collect information about the phone network associated with
              your mobile device, your mobile device&apos;s operating system or
              platform, the type of mobile device you use, your mobile
              device&apos;s unique device ID, and information about the features
              of our application(s) you accessed.
            </li>
          </ul>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed my-4">
            This information is primarily needed to maintain the security and
            operation of our application(s), for troubleshooting, and for our
            internal analytics and reporting purposes.
          </p>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
            All personal information that you provide to us must be true,
            complete, and accurate, and you must notify us of any changes to
            such personal information.
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            Information automatically collected
          </h3>
          <p className="text-xs md:text-sm text-gray-700 italic leading-relaxed mb-4">
            <strong>In Short:</strong> Some information — such as your Internet
            Protocol (IP) address and/or browser and device characteristics — is
            collected automatically when you visit our Services.
          </p>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
            We automatically collect certain information when you visit, use, or
            navigate the Services. This information does not reveal your
            specific identity (like your name or contact information) but may
            include device and usage information, such as your IP address,
            browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location,
            information about how and when you use our Services, and other
            technical information. This information is primarily needed to
            maintain the security and operation of our Services, and for our
            internal analytics and reporting purposes.
          </p>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
            Like many businesses, we also collect information through cookies
            and similar technologies.
          </p>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
            The information we collect includes:
          </p>
          <ul className="list-disc pl-4 md:pl-6 space-y-3 text-xs md:text-sm text-gray-700">
            <li className="text-xs md:text-sm">
              <em>Log and Usage Data.</em> Log and usage data is
              service-related, diagnostic, usage, and performance information
              our servers automatically collect when you access or use our
              Services and which we record in log files. Depending on how you
              interact with us, this log data may include your IP address,
              device information, browser type, and settings and information
              about your activity in the Services (such as the date/time stamps
              associated with your usage, pages and files viewed, searches, and
              other actions you take such as which features you use), device
              event information (such as system activity, error reports
              (sometimes called &quot;crash dumps&quot;), and hardware
              settings).
            </li>
            <li className="text-xs md:text-sm">
              <em>Device Data.</em> We collect device data such as information
              about your computer, phone, tablet, or other device you use to
              access the Services. Depending on the device used, this device
              data may include information such as your IP address (or proxy
              server), device and application identification numbers, location,
              browser type, hardware model, Internet service provider and/or
              mobile carrier, operating system, and system configuration
              information.
            </li>
            <li className="text-xs md:text-sm">
              <em>Location Data.</em> We collect location data such as
              information about your device&apos;s location, which can be either
              precise or imprecise. How much information we collect depends on
              the type and settings of the device you use to access the
              Services. For example, we may use GPS and other technologies to
              collect geolocation data that tells us your current location
              (based on your IP address). You can opt out of allowing us to
              collect this information either by refusing access to the
              information or by disabling your Location setting on your device.
              However, if you choose to opt out, you may not be able to use
              certain aspects of the Services.
            </li>
            <li className="text-xs md:text-sm">
              <em>Interaction data.</em> We collect data on how you interact
              with other users and features within the app. This includes likes,
              swipes, profile views, matches, and chat activity. These signals
              help us improve matchmaking and ensure a safe, engaging community.
            </li>
            <li className="text-xs md:text-sm">
              <em>Content Data.</em> While we do not scan or sell your private
              conversations, we may collect metadata related to your activity.
              This includes message timestamps, frequency of chats, and
              engagement levels. This data helps us monitor app health, detect
              misuse, and enhance user experience.
            </li>
            <li className="text-xs md:text-sm">
              <em>Push Notification and preferance data.</em> We track whether
              you opt in or out of push notifications, emails, and in-app
              prompts. We may also log your interactions with reminders, match
              suggestions, or promotional campaigns.
            </li>
            <li className="text-xs md:text-sm">
              <em>Analytics &amp; Performance Data.</em> To improve stability
              and performance, we collect crash reports, error logs, and
              aggregated analytics on how features are being used.
            </li>
            <li className="text-xs md:text-sm">
              <em>Behavioral Data (Derived for Recommendations).</em> We may
              derive insights based on your in-app behavior, such as the types
              of profiles you engage with most. This data helps power our
              personality-based matching algorithm, refine recommendations, and
              personalize your experience.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            Google API
          </h3>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
            Our use of information received from Google APIs will adhere to{" "}
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
  );
}

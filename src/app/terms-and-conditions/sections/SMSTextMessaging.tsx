export function SMSTextMessaging() {
  return (
    <section id="sms">
      <h2 className="text-base md:text-lg font-bold text-gray-900 mb-4">
        25. SMS TEXT MESSAGING
      </h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
            Program Description
          </h3>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            By opting into any FindABohra text messaging program, you expressly
            consent to receive text messages (SMS) to your mobile number.
            FindABohra text messages may include &quot;account alerts&quot;.
          </p>
        </div>

        <div>
          <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
            Opting Out
          </h3>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            To stop receiving SMS messages, simply reply to the text with
            &quot;STOP&quot;. You may receive an SMS message confirming your opt-out.
          </p>
        </div>

        <div>
          <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
            Message and Data Rates
          </h3>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            Be aware that message and data rates may apply to any SMS messages
            sent or received. These rates are determined by your carrier and the
            specifics of your mobile plan.
          </p>
        </div>

        <div>
          <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
            Support
          </h3>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            For questions or assistance regarding SMS communications, please
            email{" "}
            <a
              href="mailto:support@findabohra.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              support@findabohra.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export function ContactInformation() {
  return (
    <section id="how-can-you-contact-us-about-this-notice">
      <h2 className="text-sm md:text-lg font-semibold text-gray-900 mb-4">
        16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
      </h2>
      <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
        If you have questions or comments about this notice, you may email us at{" "}
        <a
          href="mailto:support@findabohra.com"
          className="text-blue-600 hover:underline"
        >
          support@findabohra.com
        </a>{" "}
        or contact us by post at:
      </p>
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
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
  );
}

import Image from "next/image";
import { FaHeart } from "./icons";

export function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-8 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0 mb-8 md:mb-12">
          {/* Column 1 - Logo and Description */}
          <div className="w-full md:w-65 text-center md:text-left">
            <a href="#home" className="inline-block">
              <Image src="/logo-footer.png" alt="logo" width={80} height={80} />
            </a>
            <p className="text-gray-300 leading-relaxed text-xs md:text-xs w-full md:w-[90%] mt-3 mb-6 mx-auto md:mx-0">
              The trusted dating platform helping Bohras find meaningful
              connections worldwide.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {/* Social Media Icons */}
              <a
                href="https://www.facebook.com/findabohra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Image
                  src="/facebook-official.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="brightness-0 invert"
                />
              </a>
              <a
                href="https://twitter.com/findabohra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Follow us on X (formerly Twitter)"
              >
                <Image
                  src="/twitter-x-official.png"
                  alt="X (formerly Twitter)"
                  width={10}
                  height={10}
                  className="brightness-0 invert"
                />
              </a>
              <a
                href="https://www.instagram.com/findabohra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Image
                  src="/instagram-official.png"
                  alt="Instagram"
                  width={15}
                  height={15}
                  className="brightness-0 invert"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/findabohra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Image
                  src="/linkedin-official.png"
                  alt="LinkedIn"
                  width={15}
                  height={15}
                  className="brightness-0 invert"
                />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4 md:space-y-6 text-white text-center md:text-left">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="#about"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Features
                </a>
              </li>
              {/* <li>
                <a
                  href="#testimonials"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Blog
                </a>
              </li> */}
            </ul>
          </div>

          {/* Column 3 - Contact Details */}
          <div className="w-full md:w-45 space-y-4 md:space-y-6 text-white text-center md:text-left">
            <h3 className="text-sm font-semibold">Contact Details</h3>
            <ul className="space-y-2.5 text-xs">
              <li>support@findabohra.com</li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div className="space-y-4 md:space-y-6 text-white text-center md:text-left">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="#privacy-policy"
                  className="hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms-and-conditions"
                  className="hover:text-gray-300 transition-colors"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="#community-guidelines"
                  className="hover:text-gray-300 transition-colors"
                >
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 md:pt-8 w-full md:w-[80%] mx-auto text-center">
          <div className="md:flex justify-center items-center gap-1 text-white text-xs">
            <p>© 2025 FindABohra. All rights reserved. </p>
            <div className="flex items-center justify-center gap-1">
              <span>Made with</span>
              <FaHeart />
              <span>for the Bohra community.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type React from "react";
import { Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

interface NavSection {
  title: string;
  links: string[];
}

interface Social {
  id: string;
  label: string;
  src?: string;
  alt?: string;
  icon?: React.ReactNode;
  snapWrapper?: boolean;
}

interface Country {
  id: string;
  label: string;
  src: string;
  alt: string;
}

const NAV_SECTIONS: NavSection[] = [
  {
    title: "Corporate",
    links: ["About Us", "Careers", "Almosafer Business", "Almosafer Corporate"],
  },
  {
    title: "Legal",
    links: ["Terms & Conditions", "Privacy Policy"],
  },
  {
    title: "Support",
    links: ["Contact Us", "FAQs"],
  },
];

const SOCIAL: Social[] = [
  { id: "facebook", label: "Facebook", src: "facebook.svg", alt: "Facebook" },
  { id: "linkedin", label: "LinkedIn", src: "linkedin.svg", alt: "LinkedIn" },
  {
    id: "instagram",
    label: "Instagram",
    icon: <Instagram size={16} color="#E1306C" />,
  },
  {
    id: "twitter",
    label: "Twitter",
    icon: <FaXTwitter size={16} color="#000000" />,
  },
  { id: "youtube", label: "YouTube", src: "youtube.svg", alt: "YouTube" },
  {
    id: "snapchat",
    label: "Snapchat",
    src: "snapchat.svg",
    alt: "Snapchat",
    snapWrapper: true,
  },
];

const COUNTRIES: Country[] = [
  { id: "world", label: "Worldwide", src: "globe.svg", alt: "Worldwide" },
  {
    id: "sa",
    label: "Saudi Arabia",
    src: "saudiicon.svg",
    alt: "Saudi Arabia",
  },
  { id: "kw", label: "Kuwait", src: "kuwaiticon.svg", alt: "Kuwait" },
  {
    id: "ae",
    label: "United Arab Emirates",
    src: "emiratesicon.svg",
    alt: "UAE",
  },
  { id: "bh", label: "Bahrain", src: "bahrainicon.svg", alt: "Bahrain" },
  { id: "om", label: "Oman", src: "omanicon.svg", alt: "Oman" },
  { id: "qa", label: "Qatar", src: "qataricon.svg", alt: "Qatar" },
];

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-white py-6 sm:py-8 md:py-12"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          {/* Logo */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex justify-center sm:justify-start">
            <div className="flex items-center space-x-2" aria-hidden>
              <div className="relative">
                <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-[#0B3B49] rounded" />
                <div className="absolute top-1 right-1 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-red-500 rounded-sm" />
              </div>
            </div>
          </div>

          {/* Navigation sections (Corporate, Legal, Support) */}
          {NAV_SECTIONS.map((section) => (
            <div key={section.title} className="text-center sm:text-left">
              <h3 className="text-gray-900 font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base lg:text-lg">
                {section.title}
              </h3>
              <ul className="space-y-1 sm:space-y-2 md:space-y-3">
                {section.links.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-[#0B9BC5] hover:underline text-xs sm:text-sm md:text-base font-medium"
                      aria-label={label}
                      onClick={(e) => e.preventDefault()}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media */}
          <div className="col-span-1 text-center sm:text-left">
            <h3 className="text-gray-900 font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base lg:text-lg">
              Social Media
            </h3>
            <ul className="space-y-1 sm:space-y-2 md:space-y-3">
              {SOCIAL.map((s) => (
                <li
                  key={s.id}
                  className="flex items-center justify-center sm:justify-start"
                >
                  <a
                    href="#"
                    className="flex items-center space-x-2 sm:space-x-2 text-[#0B9BC5] hover:underline text-xs sm:text-sm md:text-base font-medium"
                    aria-label={s.label}
                    onClick={(e) => e.preventDefault()}
                  >
                    {s.icon ? (
                      s.icon
                    ) : s.snapWrapper ? (
                      <div className="w-4 sm:w-5 h-4 sm:h-5 bg-[#FFFC00] rounded flex items-center justify-center flex-shrink-0">
                        <img
                          src={s.src || "/placeholder.svg"}
                          alt={s.alt}
                          width={16}
                          height={16}
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <img
                        src={s.src || "/placeholder.svg"}
                        alt={s.alt}
                        width={16}
                        height={16}
                        loading="lazy"
                        className="flex-shrink-0"
                      />
                    )}
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div className="col-span-1 text-center sm:text-left">
            <h3 className="text-gray-900 font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base lg:text-lg">
              Countries
            </h3>
            <ul className="space-y-1 sm:space-y-2 md:space-y-3">
              {COUNTRIES.map((c) => (
                <li
                  key={c.id}
                  className="flex items-center justify-center sm:justify-start"
                >
                  <a
                    href="#"
                    className="flex items-center space-x-2 sm:space-x-2 text-[#0B9BC5] hover:underline text-xs sm:text-sm md:text-base font-medium"
                    aria-label={c.label}
                    onClick={(e) => e.preventDefault()}
                  >
                    <img
                      src={c.src || "/placeholder.svg"}
                      alt={c.alt}
                      width={16}
                      height={16}
                      loading="lazy"
                      className="flex-shrink-0"
                    />
                    <span>{c.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Awards and Payment Methods */}
        <div className="mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 md:pt-8 border-t border-gray-200">
          <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 mb-4 sm:mb-6">
            <img
              src="award.svg"
              alt="World Travel Awards"
              className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
              loading="lazy"
            />

            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              <img
                src="master_logo.svg"
                alt="Mastercard"
                loading="lazy"
                className="h-4 sm:h-5 md:h-6 lg:h-8 w-auto"
              />
              <img
                src="visa_logo.svg"
                alt="Visa"
                loading="lazy"
                className="h-4 sm:h-5 md:h-6 lg:h-8 w-auto"
              />
            </div>
          </div>

          <div className="text-center text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">
            Copyright © 2025 Almosafer
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-500">
            <div className="text-center">
              <div className="font-medium text-xs sm:text-sm">
                Travel and Tourism Services License Permit Number:
              </div>
              <div className="text-xs">73103013</div>
            </div>
            <div className="hidden sm:block w-px h-6 sm:h-8 bg-gray-300" />
            <div className="text-center">
              <div className="font-medium text-xs sm:text-sm">
                Commercial Registration Number:
              </div>
              <div className="text-xs">1010363465</div>
            </div>
            <div className="hidden sm:block w-px h-6 sm:h-8 bg-gray-300" />
            <div className="text-center">
              <div className="font-medium text-xs sm:text-sm">Category:</div>
              <div className="text-xs">
                General Travel &amp; Tourism Service Provider
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

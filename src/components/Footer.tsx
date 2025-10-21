import React from "react";
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
      className="bg-[#fff] py-12"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-6 gap-8">
          {/* Logo */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2" aria-hidden>
              <div className="relative">
                <div className="w-12 h-12 bg-[#0B3B49] rounded" />
                <div className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-sm" />
              </div>
            </div>
          </div>

          {/* Navigation sections (Corporate, Legal, Support) */}
          {NAV_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-gray-900 font-semibold mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-[#0B9BC5] hover:underline text-lg font-medium"
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

          {/* Social Media & Countries column */}
          <div className="col-span-1">
            <div className="mb-8">
              <h3 className="text-gray-900 font-semibold mb-4">Social Media</h3>
              <ul className="space-y-3">
                {SOCIAL.map((s) => (
                  <li key={s.id}>
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-[#0B9BC5] hover:underline text-lg font-medium"
                      aria-label={s.label}
                      onClick={(e) => e.preventDefault()}
                    >
                      {s.icon ? (
                        s.icon
                      ) : s.snapWrapper ? (
                        <div className="w-5 h-5 bg-[#FFFC00] rounded flex items-center justify-center">
                          <img
                            src={s.src}
                            alt={s.alt}
                            width={24}
                            height={24}
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <img
                          src={s.src}
                          alt={s.alt}
                          width={20}
                          height={20}
                          loading="lazy"
                        />
                      )}
                      <span>{s.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Countries */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Countries</h3>
            <ul className="space-y-3">
              {COUNTRIES.map((c) => (
                <li key={c.id}>
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-[#0B9BC5] hover:underline text-lg font-medium"
                    aria-label={c.label}
                    onClick={(e) => e.preventDefault()}
                  >
                    <img
                      src={c.src}
                      alt={c.alt}
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                    <span>{c.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Awards and Payment Methods */}
        <div className="mt-12 pt-8">
          <div className="flex flex-col items-center justify-center space-y-4 mb-6">
            <img
              src="award.svg"
              alt="World Travel Awards"
              width={200}
              height={200}
              loading="lazy"
            />

            <div className="flex items-center space-x-4 ml-8">
              <img src="master_logo.svg" alt="Mastercard" loading="lazy" />
              <img src="visa_logo.svg" alt="Visa" loading="lazy" />
            </div>
          </div>

          <div className="text-center text-gray-600 text-sm mb-6">
            Copyright © 2025 Almosafer
          </div>

          <div className="flex items-center justify-around space-x-8 text-xs text-gray-500">
            <div className="text-center">
              <div className="font-medium">
                Travel and Tourism Services License Permit Number:
              </div>
              <div>73103013</div>
            </div>
            <div className="w-px h-8 bg-gray-300" />
            <div className="text-center">
              <div className="font-medium">Commercial Registration Number:</div>
              <div>1010363465</div>
            </div>
            <div className="w-px h-8 bg-gray-300" />
            <div className="text-center">
              <div className="font-medium">Category:</div>
              <div>General Travel &amp; Tourism Service Provider</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
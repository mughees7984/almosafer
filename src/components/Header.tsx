import type React from "react";
import { memo, useState, useEffect } from "react";
import { Plane, Building2, Lightbulb, Phone, Menu, X } from "lucide-react";

const PHONE = "+966554400000";
const WHATSAPP_LINK = `https://wa.me/966554400000`;
const headerBg = "bg-[#0B3B49]";
const navButtonBase =
  "flex items-center space-x-2 text-white hover:text-gray-200 transition pb-3 border-b-2 border-transparent hover:border-white";

interface NavItem {
  key: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const navItems: NavItem[] = [
  { key: "flights", Icon: Plane, label: "Flights" },
  { key: "stays", Icon: Building2, label: "Stays" },
  { key: "activities", Icon: Lightbulb, label: "Activities" },
];

const TopHeader: React.FC<{
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}> = ({ onMenuToggle, isMenuOpen }) => {
  return (
    <header className={headerBg} aria-label="Top header">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo - responsive sizing */}
          <div className="flex-shrink-0">
            <img
              src="logo1.svg"
              width={150}
              height={150}
              alt="Logo"
              className="h-8 w-auto sm:h-10 md:h-12 lg:h-auto lg:w-[150px]"
            />
          </div>

          {/* Mobile Menu Toggle - visible only on mobile/tablet */}
          <button
            type="button"
            onClick={onMenuToggle}
            className="md:hidden text-white hover:text-gray-200 transition p-2 -mr-2 flex-shrink-0"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Right Side Navigation - hidden on mobile/tablet */}
          <div className="hidden md:flex items-center gap-2 lg:gap-6 flex-wrap justify-end">
            {/* Currency Selector */}
            <button
              type="button"
              aria-haspopup="listbox"
              aria-label="Select currency"
              className="text-white hover:text-gray-200 transition text-xs lg:text-sm flex items-center flex-shrink-0"
            >
              <span aria-hidden="true">SAR</span>
              <svg
                className="w-3 h-3 lg:w-4 lg:h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Language Button */}
            <button
              type="button"
              aria-label="العربية"
              className="text-white hover:text-gray-200 transition text-xs lg:text-sm flex-shrink-0"
            >
              العربية
            </button>

            {/* Retrieve Booking - hidden on smaller tablets */}
            <button
              type="button"
              aria-label="Retrieve my booking"
              className="text-white hover:text-gray-200 transition text-xs lg:text-sm hidden lg:block flex-shrink-0"
            >
              Retrieve my booking
            </button>

            {/* WhatsApp Contact - responsive text display */}
            <a
              href={WHATSAPP_LINK}
              className="text-white hover:text-gray-200 transition flex items-center gap-1 text-xs lg:text-sm flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Contact via WhatsApp ${PHONE}`}
            >
              <Phone
                size={14}
                className="stroke-current lg:w-4 lg:h-4"
                aria-hidden="true"
              />
              <span className="hidden sm:inline">{PHONE}</span>
            </a>

            {/* Sign In Button - responsive padding */}
            <button
              type="button"
              aria-label="Sign in"
              className="px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 border border-white text-white rounded-full hover:bg-white hover:text-[#0B3B49] transition font-normal text-xs lg:text-sm flex-shrink-0"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const SecondaryNav: React.FC = () => {
  return (
    <nav className={`${headerBg} hidden md:block`} aria-label="Main navigation">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex gap-4 md:gap-6 lg:gap-8 py-2 md:py-3 overflow-x-auto">
          {navItems.map(({ key, Icon, label }) => (
            <button
              key={key}
              type="button"
              className={`${navButtonBase} text-xs md:text-sm flex-shrink-0`}
              aria-label={label}
            >
              <Icon
                width={16}
                height={16}
                className="md:w-[18px] md:h-[18px]"
                aria-hidden="true"
              />
              <span className="font-normal">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-[9998] md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel - responsive width and layout */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85vw] max-w-xs ${headerBg} z-[9999] md:hidden overflow-y-auto`}
      >
        <div className="flex flex-col min-h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 flex-shrink-0">
            <span className="text-white text-sm font-medium">Menu</span>
            <button
              type="button"
              onClick={onClose}
              className="text-white hover:text-gray-200 transition p-1"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Navigation Items */}
            <div className="px-3 py-3">
              <div className="text-white/50 text-xs font-medium uppercase tracking-wider mb-2 px-2">
                Navigation
              </div>
              <div className="space-y-1">
                {navItems.map(({ key, Icon, label }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={onClose}
                    className="flex items-center gap-3 text-white hover:bg-white/10 transition w-full py-2.5 px-3 rounded-md text-left text-sm"
                    aria-label={label}
                  >
                    <Icon
                      width={18}
                      height={18}
                      aria-hidden="true"
                      className="flex-shrink-0"
                    />
                    <span className="font-normal">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 mx-3" />

            {/* Settings & Actions */}
            <div className="px-3 py-3">
              <div className="text-white/50 text-xs font-medium uppercase tracking-wider mb-2 px-2">
                Settings
              </div>
              <div className="space-y-1">
                {/* Currency Selector */}
                <button
                  type="button"
                  aria-haspopup="listbox"
                  aria-label="Select currency"
                  className="text-white hover:bg-white/10 transition flex items-center justify-between w-full py-2.5 px-3 rounded-md text-sm"
                >
                  <span>Currency</span>
                  <div className="flex items-center gap-1">
                    <span aria-hidden="true" className="text-sm">
                      SAR
                    </span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Language Button */}
                <button
                  type="button"
                  aria-label="العربية"
                  className="text-white hover:bg-white/10 transition w-full text-left py-2.5 px-3 rounded-md text-sm"
                >
                  Language: العربية
                </button>

                {/* Retrieve Booking */}
                <button
                  type="button"
                  aria-label="Retrieve my booking"
                  className="text-white hover:bg-white/10 transition w-full text-left py-2.5 px-3 rounded-md text-sm"
                >
                  Retrieve my booking
                </button>

                {/* WhatsApp Contact */}
                <a
                  href={WHATSAPP_LINK}
                  className="text-white hover:bg-white/10 transition flex items-center gap-3 py-2.5 px-3 rounded-md text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Contact via WhatsApp ${PHONE}`}
                  onClick={onClose}
                >
                  <Phone
                    size={16}
                    className="stroke-current flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{PHONE}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer - Sign In Button */}
          <div className="px-4 py-3 border-t border-white/10 flex-shrink-0">
            <button
              type="button"
              aria-label="Sign in"
              onClick={onClose}
              className="w-full px-5 py-2.5 border border-white text-white rounded-full hover:bg-white hover:text-[#0B3B49] transition font-normal text-sm"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <TopHeader onMenuToggle={toggleMenu} isMenuOpen={isMenuOpen} />
      <SecondaryNav />
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  );
};

export default memo(Header);

import React, { memo } from 'react';
import { Plane, Building2, Lightbulb, Phone } from 'lucide-react';

const PHONE = '+966554400000';
const WHATSAPP_LINK = `https://wa.me/966554400000`;
const headerBg = 'bg-[#0B3B49]';
const navButtonBase =
  'flex items-center space-x-2 text-white hover:text-gray-200 transition pb-3 border-b-2 border-transparent hover:border-white';

interface NavItem {
  key: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const navItems: NavItem[] = [
  { key: 'flights', Icon: Plane, label: 'Flights' },
  { key: 'stays', Icon: Building2, label: 'Stays' },
  { key: 'activities', Icon: Lightbulb, label: 'Activities' },
];

const TopHeader: React.FC = () => {
  return (
    <header className={headerBg} aria-label="Top header">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img src="logo1.svg" width={150} height={150} alt="Logo" />

          {/* Right Side Navigation */}
          <div className="flex items-center space-x-6">
            {/* Currency Selector */}
            <button
              type="button"
              aria-haspopup="listbox"
              aria-label="Select currency"
              className="text-white hover:text-gray-200 transition text-sm flex items-center"
            >
              <span aria-hidden="true">SAR</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Language Button */}
            <button type="button" aria-label="العربية" className="text-white hover:text-gray-200 transition text-sm">
              العربية
            </button>

            {/* Retrieve Booking */}
            <button type="button" aria-label="Retrieve my booking" className="text-white hover:text-gray-200 transition text-sm">
              Retrieve my booking
            </button>

            {/* WhatsApp Contact */}
            <a
              href={WHATSAPP_LINK}
              className="text-white hover:text-gray-200 transition flex items-center space-x-1 text-sm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Contact via WhatsApp ${PHONE}`}
            >
              <Phone size={16} className="stroke-current" aria-hidden="true" />
              <span>{PHONE}</span>
            </a>

            {/* Sign In Button */}
            <button
              type="button"
              aria-label="Sign in"
              className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-[#0B3B49] transition font-normal text-sm"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

const SecondaryNav: React.FC = () => {
  return (
    <nav className={headerBg} aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex space-x-8 py-3">
          {navItems.map(({ key, Icon, label }) => (
            <button
              key={key}
              type="button"
              className={navButtonBase}
              aria-label={label}
            >
              <Icon width={18} height={18} aria-hidden="true" />
              <span className="font-normal text-sm">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

const Header: React.FC = () => {
  return (
    <div>
      <TopHeader />
      <SecondaryNav />
    </div>
  );
}

export default memo(Header);



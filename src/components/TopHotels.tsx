import React, { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface Hotel {
  id: number;
  city: string;
  name: string;
  image: string;
}

interface Feature {
  icon: string;
  title: string;
  text: string;
}

interface AppStore {
  icon: string;
  alt: string;
  href: string;
}

const hotels: Hotel[] = [
  {
    id: 1,
    city: "Cairo",
    name: "Ramses Hilton",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=500&fit=crop",
  },
  {
    id: 2,
    city: "Dubai",
    name: "Atlantis The Royal",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=500&fit=crop",
  },
  {
    id: 3,
    city: "Phuket",
    name: "Four Points by Sheraton Phuket",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=500&fit=crop",
  },
  {
    id: 4,
    city: "Manama",
    name: "Wyndham Garden Manama",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=500&fit=crop",
  },
  {
    id: 5,
    city: "Istanbul",
    name: "DoubleTree by Hilton Istanbul",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=500&fit=crop",
  },
   {
    id: 6,
    city: "London",
    name: "Royal Lancaster London",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=500&fit=crop",
  },
   {
    id: 7,
    city: "Bangkok",
    name: "Royal Orchid Sheraton Hotel",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=500&fit=crop",
  },
   {
    id: 8,
    city: "Doha",
    name: "Hyatt Regency Oryx Doha",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=500&fit=crop",
  },
   {
    id: 9,
    city: "Kuwait",
    name: "Millennium Central Kuwait Downtown",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=500&fit=crop",
  },
   {
    id: 10,
    city: "Baku",
    name: "Baku Marriott Hotel Boulevard",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=500&fit=crop",
  },
   {
    id: 11,
    city: "Amman",
    name: "Regency Palace Amman",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=500&fit=crop",
  },
];

const features: Feature[] = [
  {
    icon: "globe1.svg",
    title: "Choose from Over 1 Million Stays",
    text: "Book stays with Almosafer, from affordable stays to luxury accommodations! Compare rates and choose from over 1 million properties around the world with Almosafer.",
  },
  {
    icon: "magnifuin.svg",
    title: "Quick and Easy Stay Search",
    text: "Booking stays online in any destination is easy with Almosafer. Compare prices, amenities, and star rating and pick your favourite based on location, convenience, dining options and more.",
  },
  {
    icon: "price.svg",
    title: "Exclusive Choice of Stays at Affordable Prices",
    text: "Browse affordable stays, compare rates and get the best deals with Almosafer. Book properties online and choose from affordable rates with special discounts at budget-friendly prices.",
  },
  {
    icon: "bookingapp.svg",
    title: "Book Stays at Your Own Comfort With Almosafer App",
    text: "Download the Almosafer app for free on Google Play and the App Store and get access to the best stay deals right at your fingertips. Choose and book stays on the app in a few simple steps.",
  },
];

const appStores: AppStore[] = [
  { icon: "appstore-icon.svg", alt: "App Store", href: "#" },
  { icon: "google-play-icon.svg", alt: "Google Play", href: "#" },
  { icon: "huawei-icon.svg", alt: "Huawei AppGallery", href: "#" },
];

const TopHotels: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 400;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Top hotels</h2>

        {/* Hotels Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-hidden scroll-smooth"
          >
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>

          {/* Navigation Arrows */}
          <ArrowButton direction="left" onClick={() => scroll("left")} />
          <ArrowButton direction="right" onClick={() => scroll("right")} />
        </div>

        {/* Features */}
        <div className="grid grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Almosafer App Section */}
        <AppPromoSection />
      </div>
    </div>
  );
};

/* -------------------- Subcomponents -------------------- */

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => (
  <div className="flex-shrink-0 w-1/4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
    <div className="relative h-80 overflow-hidden">
      <img
        src={hotel.image}
        alt={`${hotel.city} - ${hotel.name}`}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <p className="text-md font-bold">{hotel.city}</p>
        <p className="text-sm text-gray-200">{hotel.name}</p>
      </div>
    </div>
  </div>
);

interface FeatureCardProps {
  icon: string;
  title: string;
  text: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, text }) => (
  <div className="text-center">
    <div className="flex justify-start mb-4">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
        <img src={icon} alt={title} />
      </div>
    </div>
    <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm">{text}</p>
  </div>
);

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  const positionClass =
    direction === "left" ? "left-0 -translate-x-6" : "right-0 translate-x-6";

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${positionClass} bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10`}
      aria-label={`Scroll ${direction}`}
    >
      <Icon size={24} className="text-gray-700" />
    </button>
  );
};

const AppPromoSection: React.FC = () => (
  <div className="mt-20 py-12 rounded-lg">
    <div className="flex items-center justify-between gap-12">
      {/* Left Content */}
      <div className="flex space-x-12">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Get the Almosafer app!
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our app takes care of all your travel needs. From flights and hotels
            to activities and more. With secure, flexible payment options and a
            smooth, user-friendly experience, Almosafer is your perfect travel
            partner.
          </p>
        </div>

        {/* App Store Links */}
        <div className="flex gap-8">
          <div>
            <p className="text-gray-700 font-semibold mb-4">Available now</p>
            <div className="flex flex-col gap-3">
              {appStores.map(({ icon, alt, href }, i) => (
                <a key={i} href={href}>
                  <img src={icon} alt={alt} width={200} height={200} />
                </a>
              ))}
            </div>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center mt-20">
            <div className="w-32 h-32 bg-white p-2 rounded-lg border-2 border-gray-300">
              <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                <img src="qrscan.svg" alt="Scan QR to download app" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right - App Mockup */}
      <div className="flex-1 flex justify-end">
        <div className="relative w-72">
          <img
            src="alm_app.svg"
            alt="Almosafer App"
            className="w-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  </div>
);

export default TopHotels;

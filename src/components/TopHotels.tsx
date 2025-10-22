import React from "react";

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

const TopHotels = () => {
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
          Top hotels
        </h2>

        {/* Hotels Carousel - Changed back to horizontal scroll carousel with hidden scrollbar */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72"
              >
                <HotelCard hotel={hotel} />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <ArrowButton direction="left" onClick={() => scroll("left")} />
          <ArrowButton direction="right" onClick={() => scroll("right")} />
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16">
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

const HotelCard = ({ hotel }: HotelCardProps) => (
  <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
    <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
      <img
        src={hotel.image || "/placeholder.svg"}
        alt={`${hotel.city} - ${hotel.name}`}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
        <p className="text-sm sm:text-base font-bold">{hotel.city}</p>
        <p className="text-xs sm:text-sm text-gray-200">{hotel.name}</p>
      </div>
    </div>
  </div>
);

interface FeatureCardProps {
  icon: string;
  title: string;
  text: string;
}

const FeatureCard = ({ icon, title, text }: FeatureCardProps) => (
  <div className="text-left sm:text-center">
    <div className="flex sm:justify-center mb-4">
      <div className="w-14 sm:w-16 h-14 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
        <img src={icon || "/placeholder.svg"} alt={title} className="w-8 h-8" />
      </div>
    </div>
    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">
      {title}
    </h3>
    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{text}</p>
  </div>
);

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const ArrowButton = ({ direction, onClick }: ArrowButtonProps) => {
  const isLeft = direction === "left";
  const positionClass = isLeft
    ? "left-0 -translate-x-6"
    : "right-0 translate-x-6";

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${positionClass} bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow z-10`}
      aria-label={`Scroll ${direction}`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-700 sm:w-6 sm:h-6"
      >
        {isLeft ? (
          <>
            <polyline points="15 18 9 12 15 6"></polyline>
          </>
        ) : (
          <>
            <polyline points="9 18 15 12 9 6"></polyline>
          </>
        )}
      </svg>
    </button>
  );
};

const AppPromoSection = () => (
  <div className="mt-12 sm:mt-20 py-8 sm:py-12 rounded-lg">
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 sm:gap-12">
      {/* Left Content */}
      <div className="flex flex-col flex-1 max-w-xl text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
          Get the Almosafer app!
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
          Our app takes care of all your travel needs. From flights and hotels
          to activities and more. With secure, flexible payment options and a
          smooth, user-friendly experience, Almosafer is your perfect travel
          partner.
        </p>
      </div>

      {/* App Store Links and QR Code */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center w-full lg:w-auto">
        <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
          <p className="text-gray-700 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
            Available now
          </p>
          <div className="flex flex-col gap-2 sm:gap-3">
            {appStores.map(({ icon, alt, href }, i) => (
              <a key={i} href={href} className="inline-block">
                <img
                  src={icon || "/placeholder.svg"}
                  alt={alt}
                  width={160}
                  height={160}
                  className="w-40 sm:w-48 h-auto"
                />
              </a>
            ))}
          </div>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center mt-6 sm:mt-8 lg:mt-0">
          <div className="w-24 sm:w-32 h-24 sm:h-32 bg-white p-2 rounded-lg border-2 border-gray-300">
            <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
              <img
                src="qrscan.svg"
                alt="Scan QR to download app"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right - App Mockup */}
      <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0 w-full lg:w-auto">
        <div className="relative w-48 sm:w-56 md:w-64 lg:w-72 max-w-full">
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

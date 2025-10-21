// import { useState } from "react";
// import { ChevronRight, ChevronLeft } from "lucide-react";

// const TopHotels = ()=>{
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const hotels = [
//     {
//       id: 1,
//       city: "Cairo",
//       name: "Ramses Hilton",
//       image:
//         "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=500&fit=crop",
//     },
//     {
//       id: 2,
//       city: "Dubai",
//       name: "Atlantis The Royal",
//       image:
//         "https://images.unsplash.com/photo-1512453213851-32e6bcd34fc3?w=400&h=500&fit=crop",
//     },
//     {
//       id: 3,
//       city: "Phuket",
//       name: "Four Points by Sheraton Phuket",
//       image:
//         "https://images.unsplash.com/photo-1571003123894-169987ad94d3?w=400&h=500&fit=crop",
//     },
//     {
//       id: 4,
//       city: "Manama",
//       name: "Wyndham Garden Manama",
//       image:
//         "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=400&h=500&fit=crop",
//     },
//     {
//       id: 5,
//       city: "Bangkok",
//       name: "Marriott Marquis Bangkok",
//       image:
//         "https://images.unsplash.com/photo-1564501049559-c1d4a6f6d60d?w=400&h=500&fit=crop",
//     },
//   ];

//   const scroll = (direction) => {
//     const container = document.getElementById("hotels-scroll");
//     if (container) {
//       const scrollAmount = 400;
//       if (direction === "left") {
//         container.scrollLeft -= scrollAmount;
//         setScrollPosition(container.scrollLeft - scrollAmount);
//       } else {
//         container.scrollLeft += scrollAmount;
//         setScrollPosition(container.scrollLeft + scrollAmount);
//       }
//     }
//   };

//   return (
//     <div className="w-full bg-white py-12 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <h2 className="text-4xl font-bold text-gray-800 mb-8">Top hotels</h2>

//         {/* Hotels Container */}
//         <div className="relative">
//           {/* Scroll Container */}
//           <div
//             id="hotels-scroll"
//             className="flex gap-6 overflow-hidden"
//             style={{ scrollBehavior: "smooth" }}
//           >
//             {hotels.map((hotel) => (
//               <div
//                 key={hotel.id}
//                 className="flex-shrink-0 w-1/4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
//               >
//                 {/* Image Container */}
//                 <div className="relative h-80 overflow-hidden">
//                   <img
//                     src={hotel.image}
//                     alt={hotel.city}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

//                   {/* Text Content */}
//                   <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                     <p className="text-2xl font-bold">{hotel.city}</p>
//                     <p className="text-sm text-gray-200">{hotel.name}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Left Arrow */}
//           <button
//             onClick={() => scroll("left")}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10"
//           >
//             <ChevronLeft size={24} className="text-gray-700" />
//           </button>

//           {/* Right Arrow */}
//           <button
//             onClick={() => scroll("right")}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10"
//           >
//             <ChevronRight size={24} className="text-gray-700" />
//           </button>
//         </div>

//          {/* Features Section */}
//         <div className="grid grid-cols-4 gap-8 mt-16">
//           {/* Feature 1 */}
//           <div className="text-center">
//             <div className="flex  mb-4">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex ">
//                 <img src="globe1.svg" />
//               </div>
//             </div>
//             <h3 className="text-lg font-bold text-gray-800 mb-3">
//               Choose from Over 1 Million Stays
//             </h3>
//             <p className="text-gray-600 text-sm">
//               Book stays with Almosafer, from affordable stays to luxury
//               accommodations! Compare rates and choose from over 1 million
//               properties around the world with Almosafer.
//             </p>
//           </div>

//           {/* Feature 2 */}
//           <div className="text-center">
//             <div className="flex justify-start mb-4">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
//                 <img src="magnifuin.svg" />
//               </div>
//             </div>
//             <h3 className="text-lg font-bold text-gray-800 mb-3">
//               Quick and Easy Stay Search
//             </h3>
//             <p className="text-gray-600 text-sm">
//               Booking stays online in any destination is easy with Almosafer.
//               Compare prices, amenities, and star rating and pick your favourite
//               based on location,convenience, dining options and more.
//             </p>
//           </div>

//           {/* Feature 3 */}
//           <div className="text-center">
//             <div className="flex justify-start mb-4">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
//                 <img src="price.svg" />
//               </div>
//             </div>
//             <h3 className="text-lg font-bold text-gray-800 mb-3">
//               Exclusive Choice of Stays at Affordable Prices
//             </h3>
//             <p className="text-gray-600 text-sm">
//               Browse affordable stays, compare rates and get the best deals with
//               Almosafer.Book properties online and choose from affordable rates
//               with special discounts at budget-friendly prices.
//             </p>
//           </div>

//           {/* Feature 4 */}
//           <div className="text-center">
//             <div className="flex justify-start mb-4">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
//                 <img src="bookingapp.svg" />
//               </div>
//             </div>
//             <h3 className="text-lg font-bold text-gray-800 mb-3">
//               Book Stays at Your Own Comfort With Almosafer App
//             </h3>
//             <p className="text-gray-600 text-sm">
//               Download the Almosafer app for free on Google Play and the App
//               Store and get access to the best stay deals right at your
//               fingertips. Choose and book stays on the app in a few simple
//               steps.
//             </p>
//           </div>
//         </div>

//         {/* Almosafer App Section */}
//         <div className="mt-20 py-12 rounded-lg">
//           <div className="flex items-center justify-between gap-12">
//             {/* Left Content */}
//             <div className="flex space-x-12">
//               <div className="flex flex-col">
//                 <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                   Get the Almosafer app!
//                 </h2>
//                 <p className="text-gray-600 text-lg leading-relaxed mb-8">
//                   Our app takes care of all your travel needs. From flights and
//                   hotels to activities and more. With secure, flexible payment
//                   options and a smooth, user-friendly experience, Almosafer is
//                   your perfect travel partner.
//                 </p>
//               </div>

//               {/* Available Now Section */}
//               <div className="flex gap-8">
//                 <div>
//                   <p className="text-gray-700 font-semibold mb-4">
//                     Available now
//                   </p>
//                   <div className="flex flex-col gap-3">
//                     {/* App Store */}
//                     <a
//                      href="#"
//                     >
//                      <img src="appstore-icon.svg" alt="appstore-icon" width={500} height={500}/>
//                     </a>

//                     {/* Google Play */}
//                     <a
//                      href="#"
//                     >
//                      <img src="google-play-icon.svg" alt="googleplay" width={200} height={200}/>
//                     </a>
                    

//                     {/* AppGallery */}
//                     <a
//                      href="#"
//                     >
//                      <img src="huawei-icon.svg" alt="huawei-icon" width={200} height={200}/>
//                     </a>
//                   </div>
//                 </div>

//                 {/* QR Code */}
//                 <div className="flex flex-col items-center mt-20">
//                   <div className="w-32 h-32 bg-white p-2 rounded-lg border-2 border-gray-300">
//                     <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
//                       {/* <span className="text-gray-400 text-xs">QR Code</span> */}
//                       <img src="qrscan.svg" alt="scan"/>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right - Phone Mockup */}
//             <div className="flex-1 flex justify-end">
//               <div className="relative w-72">
//                 <img
//                   src="alm_app.svg"
//                   alt="Almosafer App"
//                   className="w-full rounded-3xl "
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
//  export default TopHotels;



import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const hotels = [
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
      "https://images.unsplash.com/photo-1512453213851-32e6bcd34fc3?w=400&h=500&fit=crop",
  },
  {
    id: 3,
    city: "Phuket",
    name: "Four Points by Sheraton Phuket",
    image:
      "https://images.unsplash.com/photo-1571003123894-169987ad94d3?w=400&h=500&fit=crop",
  },
  {
    id: 4,
    city: "Manama",
    name: "Wyndham Garden Manama",
    image:
      "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=400&h=500&fit=crop",
  },
  {
    id: 5,
    city: "Bangkok",
    name: "Marriott Marquis Bangkok",
    image:
      "https://images.unsplash.com/photo-1564501049559-c1d4a6f6d60d?w=400&h=500&fit=crop",
  },
];

const features = [
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

const appStores = [
  { icon: "appstore-icon.svg", alt: "App Store", href: "#" },
  { icon: "google-play-icon.svg", alt: "Google Play", href: "#" },
  { icon: "huawei-icon.svg", alt: "Huawei AppGallery", href: "#" },
];

const TopHotels = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
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

const HotelCard = ({ hotel }) => (
  <div className="flex-shrink-0 w-1/4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
    <div className="relative h-80 overflow-hidden">
      <img
        src={hotel.image}
        alt={`${hotel.city} - ${hotel.name}`}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <p className="text-2xl font-bold">{hotel.city}</p>
        <p className="text-sm text-gray-200">{hotel.name}</p>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, text }) => (
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

const ArrowButton = ({ direction, onClick }) => {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  const positionClass =
    direction === "left"
      ? "left-0 -translate-x-6"
      : "right-0 translate-x-6";

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

const AppPromoSection = () => (
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

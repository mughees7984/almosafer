import { useState } from "react";
import { Plane, Hotel, MapPin, Calendar, Users, Search } from "lucide-react";

const TravelBooking: React.FC = () => {
  const [tripType, setTripType] = useState<
    "oneway" | "roundtrip" | "multicity"
  >("roundtrip");
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("Tue, 21 Oct");
  const [endDate, setEndDate] = useState<string>("Wed, 22 Oct");
  const [travelers, setTravelers] = useState<string>("1 Traveler, Economy");
  const [activeTab, setActiveTab] = useState<
    "flights" | "stays" | "activities"
  >("flights");
  const [showReturn, setShowReturn] = useState<boolean>(false);
  const [directFlights, setDirectFlights] = useState<boolean>(false);
  const [includedBaggage, setIncludedBaggage] = useState<boolean>(false);

  return (
    <div className="min-h-[400px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[600px] bg-[url('hero.jpeg')] bg-cover bg-center bg-no-repeat relative">
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10 pt-4 sm:pt-6 md:pt-12 px-3 sm:px-4 md:px-6 pb-6 sm:pb-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto mt-4 sm:mt-6 md:mt-[60px]">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 md:mb-3 text-balance">
            Let's book your next trip!
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white/90">
            Choose from over 1.5 million hotels & 450+ airlines
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-6xl mt-6 sm:mt-8 md:mt-[100px] mx-auto bg-white rounded-lg overflow-hidden shadow-2xl">
          {/* Tabs with Dark Background - Improved mobile tab layout */}
          <div className="flex flex-wrap sm:flex-nowrap bg-gradient-to-r from-teal-700 to-teal-600">
            <button
              onClick={() => setActiveTab("flights")}
              className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-4 font-semibold transition ${
                activeTab === "flights"
                  ? "bg-white text-gray-800"
                  : "text-white hover:bg-teal-600"
              }`}
            >
              <Plane size={20} />
              <span className="text-sm md:text-base">Flights</span>
            </button>
            <button
              onClick={() => setActiveTab("stays")}
              className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-4 font-semibold transition ${
                activeTab === "stays"
                  ? "bg-white text-gray-800"
                  : "text-white hover:bg-teal-600"
              }`}
            >
              <Hotel size={20} />
              <span className="text-sm md:text-base">Stays</span>
            </button>
            <button
              onClick={() => setActiveTab("activities")}
              className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-4 font-semibold transition ${
                activeTab === "activities"
                  ? "bg-white text-gray-800"
                  : "text-white hover:bg-teal-600"
              }`}
            >
              <MapPin size={20} />
              <span className="text-sm md:text-base">Activities</span>
            </button>
          </div>

          {/* Search Content */}
          <div className="p-4 md:p-6 bg-white">
            {/* Trip Type Buttons */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-3 mb-5 md:mb-6">
              <div className="flex gap-2 md:gap-3">
                <button
                  onClick={() => setTripType("oneway")}
                  className={`flex-1 md:flex-initial px-4 md:px-5 py-2 rounded font-semibold text-sm transition ${
                    tripType === "oneway"
                      ? "bg-blue-100 text-blue-700 border border-blue-300"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  One Way
                </button>
                <button
                  onClick={() => setTripType("roundtrip")}
                  className={`flex-1 md:flex-initial px-4 md:px-5 py-2 rounded font-semibold text-sm transition ${
                    tripType === "roundtrip"
                      ? "bg-blue-100 text-blue-700 border border-blue-300"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Round Trip
                </button>
                <button
                  onClick={() => setTripType("multicity")}
                  className={`flex-1 md:flex-initial px-4 md:px-5 py-2 rounded font-semibold text-sm transition ${
                    tripType === "multicity"
                      ? "bg-blue-100 text-blue-700 border border-blue-300"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Multi City
                </button>
              </div>

              <div className="flex gap-4 md:gap-6 md:ml-auto">
                <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={directFlights}
                    onChange={(e) => setDirectFlights(e.target.checked)}
                    className="w-4 h-4 accent-blue-500"
                  />
                  <span className="text-xs sm:text-sm font-medium">
                    Direct Flights
                  </span>
                </label>
                <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includedBaggage}
                    onChange={(e) => setIncludedBaggage(e.target.checked)}
                    className="w-4 h-4 accent-blue-500"
                  />
                  <span className="text-xs sm:text-sm font-medium">
                    Included Baggage
                  </span>
                </label>
              </div>
            </div>

            {/* Search Inputs - Mobile: Stack, Desktop: Flex Row */}
            <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center md:flex-wrap">
              {/* Origin */}
              <div className="flex-1 min-w-0 md:min-w-48">
                <div className="flex items-center border-2 border-gray-300 rounded px-4 py-3 bg-white hover:border-gray-400 transition">
                  <MapPin
                    size={18}
                    className="text-gray-400 mr-3 flex-shrink-0"
                  />
                  <input
                    type="text"
                    placeholder="Origin"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full outline-none text-gray-700 placeholder-gray-400 text-sm"
                  />
                </div>
              </div>

              {/* Destination */}
              <div className="flex-1 min-w-0 md:min-w-48">
                <div className="flex items-center border-2 border-gray-300 rounded px-4 py-3 bg-white hover:border-gray-400 transition">
                  <MapPin
                    size={18}
                    className="text-gray-400 mr-3 flex-shrink-0"
                  />
                  <input
                    type="text"
                    placeholder="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full outline-none text-gray-700 placeholder-gray-400 text-sm"
                  />
                </div>
              </div>

              {/* Start Date */}
              <div className="flex-1 min-w-0 md:min-w-48">
                <div className="flex items-center border-2 border-gray-300 rounded px-4 py-3 bg-white hover:border-gray-400 transition">
                  <Calendar
                    size={18}
                    className="text-gray-400 mr-3 flex-shrink-0"
                  />
                  <input
                    type="text"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full outline-none text-gray-700 text-sm"
                  />
                </div>
              </div>

              {/* Add Return / End Date */}
              {!showReturn && tripType !== "oneway" ? (
                <button
                  onClick={() => setShowReturn(true)}
                  className="text-blue-500 hover:text-blue-600 font-semibold text-sm px-4 py-3 md:py-0"
                >
                  Add return
                </button>
              ) : tripType !== "oneway" ? (
                <div className="flex-1 min-w-0 md:min-w-48">
                  <div className="flex items-center border-2 border-gray-300 rounded px-4 py-3 bg-white hover:border-gray-400 transition">
                    <Calendar
                      size={18}
                      className="text-gray-400 mr-3 flex-shrink-0"
                    />
                    <input
                      type="text"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      placeholder="Return date"
                      className="w-full outline-none text-gray-700 text-sm"
                    />
                  </div>
                </div>
              ) : null}

              {/* Travelers */}
              <div className="flex-1 min-w-0 md:min-w-48">
                <div className="flex items-center border-2 border-gray-300 rounded px-4 py-3 bg-white hover:border-gray-400 transition cursor-pointer">
                  <Users
                    size={18}
                    className="text-gray-400 mr-3 flex-shrink-0"
                  />
                  <input
                    type="text"
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full outline-none text-gray-700 text-sm"
                  />
                </div>
              </div>

              {/* Search Button */}
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded flex items-center justify-center gap-2 transition shadow-lg w-full md:w-auto">
                <Search size={18} />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelBooking;

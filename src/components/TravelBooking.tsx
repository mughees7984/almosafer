import type React from "react";

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
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90">
            Choose from over 1.5 million hotels & 450+ airlines
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-6xl mt-6 sm:mt-8 md:mt-[100px] mx-auto bg-white rounded-lg overflow-hidden shadow-2xl">
          {/* Tabs with Dark Background - Improved mobile tab layout */}
          <div className="flex flex-wrap sm:flex-nowrap bg-gradient-to-r from-teal-700 to-teal-600">
            <button
              onClick={() => setActiveTab("flights")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-6 py-2 sm:py-4 font-semibold transition text-xs sm:text-base ${
                activeTab === "flights"
                  ? "bg-white text-gray-800"
                  : "text-white hover:bg-teal-600"
              }`}
            >
              <Plane size={16} className="sm:w-5 sm:h-5" />
              <span>Flights</span>
            </button>
            <button
              onClick={() => setActiveTab("stays")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-6 py-2 sm:py-4 font-semibold transition text-xs sm:text-base ${
                activeTab === "stays"
                  ? "bg-white text-gray-800"
                  : "text-white hover:bg-teal-600"
              }`}
            >
              <Hotel size={16} className="sm:w-5 sm:h-5" />
              <span>Stays</span>
            </button>
            <button
              onClick={() => setActiveTab("activities")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-6 py-2 sm:py-4 font-semibold transition text-xs sm:text-base ${
                activeTab === "activities"
                  ? "bg-white text-gray-800"
                  : "text-white hover:bg-teal-600"
              }`}
            >
              <MapPin size={16} className="sm:w-5 sm:h-5" />
              <span>Activities</span>
            </button>
          </div>

          {/* Search Content */}
          <div className="p-3 sm:p-4 md:p-6 bg-white">
            {/* Trip Type Buttons - Improved mobile layout with better stacking */}
            <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  onClick={() => setTripType("oneway")}
                  className={`px-3 sm:px-5 py-2 rounded font-semibold text-xs sm:text-sm transition ${
                    tripType === "oneway"
                      ? "bg-blue-100 text-blue-700 border border-blue-300"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  One Way
                </button>
                <button
                  onClick={() => setTripType("roundtrip")}
                  className={`px-3 sm:px-5 py-2 rounded font-semibold text-xs sm:text-sm transition ${
                    tripType === "roundtrip"
                      ? "bg-blue-100 text-blue-700 border border-blue-300"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Round Trip
                </button>
                <button
                  onClick={() => setTripType("multicity")}
                  className={`px-3 sm:px-5 py-2 rounded font-semibold text-xs sm:text-sm transition ${
                    tripType === "multicity"
                      ? "bg-blue-100 text-blue-700 border border-blue-300"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Multi City
                </button>
              </div>

              {/* Checkboxes - Stack on mobile, row on desktop */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 sm:ml-auto">
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

            {/* Search Inputs - Improved responsive grid layout */}
            <div className="flex flex-col gap-2 sm:gap-3">
              {/* Row 1: Origin, Destination, Start Date */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch">
                {/* Origin */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center border-2 border-gray-300 rounded px-3 sm:px-4 py-2 sm:py-3 bg-white hover:border-gray-400 transition">
                    <MapPin
                      size={16}
                      className="sm:w-[18px] sm:h-[18px] text-gray-400 mr-2 sm:mr-3 flex-shrink-0"
                    />
                    <input
                      type="text"
                      placeholder="Origin"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full outline-none text-gray-700 placeholder-gray-400 text-xs sm:text-sm"
                    />
                  </div>
                </div>

                {/* Destination */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center border-2 border-gray-300 rounded px-3 sm:px-4 py-2 sm:py-3 bg-white hover:border-gray-400 transition">
                    <MapPin
                      size={16}
                      className="sm:w-[18px] sm:h-[18px] text-gray-400 mr-2 sm:mr-3 flex-shrink-0"
                    />
                    <input
                      type="text"
                      placeholder="Destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full outline-none text-gray-700 placeholder-gray-400 text-xs sm:text-sm"
                    />
                  </div>
                </div>

                {/* Start Date */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center border-2 border-gray-300 rounded px-3 sm:px-4 py-2 sm:py-3 bg-white hover:border-gray-400 transition">
                    <Calendar
                      size={16}
                      className="sm:w-[18px] sm:h-[18px] text-gray-400 mr-2 sm:mr-3 flex-shrink-0"
                    />
                    <input
                      type="text"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full outline-none text-gray-700 text-xs sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Return Date / Add Return Button, Travelers, Search Button */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch">
                {/* Add Return / End Date */}
                {!showReturn && tripType !== "oneway" ? (
                  <button
                    onClick={() => setShowReturn(true)}
                    className="text-blue-500 hover:text-blue-600 font-semibold text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 border-2 border-dashed border-blue-300 rounded hover:bg-blue-50 transition"
                  >
                    + Add return
                  </button>
                ) : tripType !== "oneway" ? (
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center border-2 border-gray-300 rounded px-3 sm:px-4 py-2 sm:py-3 bg-white hover:border-gray-400 transition">
                      <Calendar
                        size={16}
                        className="sm:w-[18px] sm:h-[18px] text-gray-400 mr-2 sm:mr-3 flex-shrink-0"
                      />
                      <input
                        type="text"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        placeholder="Return date"
                        className="w-full outline-none text-gray-700 text-xs sm:text-sm"
                      />
                    </div>
                  </div>
                ) : null}

                {/* Travelers */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center border-2 border-gray-300 rounded px-3 sm:px-4 py-2 sm:py-3 bg-white hover:border-gray-400 transition cursor-pointer">
                    <Users
                      size={16}
                      className="sm:w-[18px] sm:h-[18px] text-gray-400 mr-2 sm:mr-3 flex-shrink-0"
                    />
                    <input
                      type="text"
                      value={travelers}
                      onChange={(e) => setTravelers(e.target.value)}
                      className="w-full outline-none text-gray-700 text-xs sm:text-sm"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 sm:px-8 py-2 sm:py-3 rounded flex items-center justify-center gap-2 transition shadow-lg text-xs sm:text-sm">
                  <Search size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelBooking;

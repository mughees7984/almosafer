import { useState } from "react";
import { Plane, Hotel, MapPin, Calendar, Users, Search } from "lucide-react";

const TravelBooking: React.FC = () => {
  const [tripType, setTripType] = useState<"oneway" | "roundtrip" | "multicity">("roundtrip");
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("Tue, 21 Oct");
  const [endDate, setEndDate] = useState<string>("Wed, 22 Oct");
  const [travelers, setTravelers] = useState<string>("1 Traveler, Economy");
  const [activeTab, setActiveTab] = useState<"flights" | "stays" | "activities">("flights");
  const [showReturn, setShowReturn] = useState<boolean>(false);

  return (
    <div className="min-h-[550px] bg-[url('hero.jpeg')] bg-cover bg-center bg-no-repeat relative">
      <div className="relative z-10 pt-12 px-6">
        {/* Header */}
        <div className="max-w-6xl mx-auto mt-[60px]">
          <h1 className="text-5xl font-bold text-white mb-3">
            Let's book your next trip!
          </h1>
          <p className="text-lg text-white/90">
            Choose from over 1.5 million hotels & 450+ airlines
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-6xl mt-[100px] mx-auto bg-white rounded-lg overflow-hidden shadow-2xl">
          {/* Tabs with Dark Background */}
          <div className="flex bg-gradient-to-r from-teal-700 to-teal-600">
            <button
              onClick={() => setActiveTab("flights")}
              className={`flex items-center gap-2 px-6 py-4 font-semibold transition ${
                activeTab === "flights"
                  ? "bg-white text-gray-800"
                  : "text-white hover:bg-teal-600"
              }`}
            >
              <Plane size={20} />
              Flights
            </button>
            <button
              onClick={() => setActiveTab("stays")}
              className={`flex items-center gap-2 px-6 py-4 font-semibold transition ${
                activeTab === "stays"
                  ? "bg-white text-gray-800"
                  : "text-white hover:bg-teal-600"
              }`}
            >
              <Hotel size={20} />
              Stays
            </button>
            <button
              onClick={() => setActiveTab("activities")}
              className={`flex items-center gap-2 px-6 py-4 font-semibold transition ${
                activeTab === "activities"
                  ? "bg-white text-gray-800"
                  : "text-white hover:bg-teal-600"
              }`}
            >
              <MapPin size={20} />
              Activities
            </button>
          </div>

          {/* Search Content */}
          <div className="p-6 bg-white">
            {/* Trip Type Buttons */}
            <div className="flex gap-3 mb-6 items-center">
              <button
                onClick={() => setTripType("oneway")}
                className={`px-5 py-2 rounded font-semibold text-sm transition ${
                  tripType === "oneway"
                    ? "bg-blue-100 text-blue-700 border border-blue-300"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                One Way
              </button>
              <button
                onClick={() => setTripType("roundtrip")}
                className={`px-5 py-2 rounded font-semibold text-sm transition ${
                  tripType === "roundtrip"
                    ? "bg-blue-100 text-blue-700 border border-blue-300"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                Round Trip
              </button>
              <button
                onClick={() => setTripType("multicity")}
                className={`px-5 py-2 rounded font-semibold text-sm transition ${
                  tripType === "multicity"
                    ? "bg-blue-100 text-blue-700 border border-blue-300"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                Multi City
              </button>

              <div className="flex gap-6 ml-auto">
                <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-blue-500" />
                  <span className="text-sm font-medium">Direct Flights</span>
                </label>
                <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-blue-500" />
                  <span className="text-sm font-medium">Included Baggage</span>
                </label>
              </div>
            </div>

            {/* Search Inputs */}
            <div className="flex gap-3 items-center flex-wrap">
              {/* Origin */}
              <div className="flex-1 min-w-48">
                <div className="flex items-center border-2 border-gray-300 rounded px-4 py-3 bg-white hover:border-gray-400 transition">
                  <MapPin size={18} className="text-gray-400 mr-3" />
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
              <div className="flex-1 min-w-48">
                <div className="flex items-center border-2 border-gray-300 rounded px-4 py-3 bg-white hover:border-gray-400 transition">
                  <MapPin size={18} className="text-gray-400 mr-3" />
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
              <div className="flex-1 min-w-48">
                <div className="flex items-center border-2 border-gray-300 rounded px-4 py-3 bg-white hover:border-gray-400 transition">
                  <Calendar size={18} className="text-gray-400 mr-3" />
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
                  className="text-blue-500 hover:text-blue-600 font-semibold text-sm px-4"
                >
                  Add return
                </button>
              ) : tripType !== "oneway" ? (
                <div className="flex-1 min-w-48">
                  <div className="flex items-center border-2 border-gray-300 rounded px-4 py-3 bg-white hover:border-gray-400 transition">
                    <Calendar size={18} className="text-gray-400 mr-3" />
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
              <div className="flex-1 min-w-48">
                <div className="flex items-center border-2 border-gray-300 rounded px-4 py-3 bg-white hover:border-gray-400 transition cursor-pointer">
                  <Users size={18} className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full outline-none text-gray-700 text-sm"
                  />
                </div>
              </div>

              {/* Search Button */}
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded flex items-center gap-2 transition shadow-lg">
                <Search size={18} />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelBooking;


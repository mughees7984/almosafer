import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TravelBooking from "./components/TravelBooking";
import TopHotels from "./components/TopHotels";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline text-red-500">Hello world!</h1> */}
      <Header/>
      <TravelBooking/>
      <TopHotels/>
      <Footer/>
    </>
  );
}

export default App;

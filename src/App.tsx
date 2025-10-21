import { useState } from "react";
import "./App.css";
// import Header from "./components/Header.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import TravelBooking from "./components/TravelBooking.tsx";
import TopHotels from "./components/TopHotels.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <TravelBooking/>
      <TopHotels/>
      <Footer/>
    </>
  );
}

export default App;

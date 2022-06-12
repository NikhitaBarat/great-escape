import "./App.css";
import Header from "./components/header/header.components.jsx";
import Footer from "./components/footer/footer.components.jsx"
import { Routes, Route } from "react-router-dom";
import { Trip, Hotels, Home, Activities, Profile, Gallery, Contact, Booking } from "./pages";
import data from './slug.json'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/book" element={<Booking /> } />
        {data.map((hotel) => (<Route path={`/book/${hotel.hotel_name.replaceAll(" ", "").toLowerCase()}`} element={<Booking data={hotel} />}/>))}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

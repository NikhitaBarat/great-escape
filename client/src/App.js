import "./App.css";
import Header from "./components/header/header.components.jsx";
import Footer from "./components/footer/footer.components.jsx"
import { Routes, Route } from "react-router-dom";
import { Trip, Hotels, Home, Activities, Profile, Gallery, Contact, Booking } from "./pages";
// import { useQuery , gql  } from '@apollo/client';
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
        <Route path="/book" element={<Booking/> } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/header/header.components.jsx'
import { Routes, Route } from 'react-router-dom'
import { Trip, Hotels, Home, Activities } from './pages';
import "./App.css";
<<<<<<< HEAD
import Header from "./components/header/header.components.jsx";
import { Routes, Route } from "react-router-dom";
import { Gallery } from "./pages";
import { Hotels } from "./pages";
import { Trip } from "./pages";
import Activities from "./pages/activities/activities.pages";
=======
>>>>>>> 92b3d7ce668b44c073dd83dcab6a1f807a992ef3

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
<<<<<<< HEAD
        <Route path="/gallery" element={<Gallery />} />
=======
        <Route path="/" element={<Home />}/>
        <Route path="/hotels" element={<Hotels />}/>
        <Route path="/trip" element={<Trip />}/>
>>>>>>> 92b3d7ce668b44c073dd83dcab6a1f807a992ef3
        <Route path="/activities" element={<Activities />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/trip" element={<Trip />} />
      </Routes>
    </div>
  );
}

export default App;

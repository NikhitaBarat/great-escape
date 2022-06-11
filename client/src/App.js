import './App.css';
import Header from './components/header/header.components.jsx'
import { Routes, Route } from 'react-router-dom'
import { Hotels } from './pages';
import { Trip } from './pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/hotels" element={<Hotels />}/>
      <Route path="/trip" element={<Trip />}/>
      </Routes>
    </div>
  );
}

export default App;

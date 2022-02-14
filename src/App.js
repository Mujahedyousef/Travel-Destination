import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/home/Home';
import TourDetails from "./components/TourDetails/TourDetails";
const dbData = require("./data/db.json");


export default function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route  path="/" element={<Home arrayData={dbData} />} />
        <Route  path="/city/:id"  element={<TourDetails arrayData={dbData} />} />
      
      </Routes>
    </div>
  );
}



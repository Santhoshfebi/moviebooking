import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Movies from "./Components/Pages/MoviesPage";
import Carousal from "./Components/Carousal";
import Seatmapp from "./Components/Seatmapp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Carousal />} />
        <Route path="/movielist" element={<Movies />} />
        <Route path="/seatbooking" element={<Seatmapp />} />
        <Route path="/movielist/seatbooking" element={<Seatmapp />} />
      </Routes>
    </Router>
  );
}


export default App;

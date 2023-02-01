import { Routes, Route } from "react-router-dom";
import "./output.css";
import About from "./pages/About";
import BookRides from "./pages/BookRides";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Prices from "./pages/Prices";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/book-ride" element={<BookRides />} />
      <Route path="/price" element={<Prices />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;

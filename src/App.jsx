import { Routes, Route } from "react-router-dom";
import "./output.css";
import About from "./pages/About";
import BookRides from "./pages/BookRides";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import { useAppContext } from "./contexts/AppContext";
import PageNotFound from "./pages/PageNotFound";
import Summary from "./pages/Summary";
import AdminDashboard from "./admin/AdminDashboard";
import BookingTimes from "./admin/BookingTimes";
import Account from "./admin/Account";

function App() {
  const { user, currentUserFromDb } = useAppContext();
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />

      {/* dashboard controlled access */}
      {user && <Route path="/book-ride" element={<BookRides />} />}

      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/book-ride/summary" element={<Summary />} />

      {/* admin access */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/booking-times" element={<BookingTimes />} />
      <Route path="/account" element={<Account />} />

      {/* page not found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

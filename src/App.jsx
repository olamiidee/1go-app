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
import AdminLogin from "./admin/AdminLogin";

function App() {
  const { user, admin, activeRidesFromDb } = useAppContext();
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* dashboard controlled access */}
      {user && (
        <>
          <Route path="/book-ride" element={<BookRides />} />
          {!activeRidesFromDb?.length > 0 ? (
            <Route path="/book-ride/summary/:id" element={<Summary />} />
          ) : (
            <Route path="/book-ride" element={<BookRides />} />
          )}
        </>
      )}

      {/* admin access */}
      <Route
        path="/admin"
        element={admin ? <AdminDashboard /> : <AdminLogin />}
      />
      <Route
        path="/admin/booking-times"
        element={admin ? <BookingTimes /> : <AdminLogin />}
      />

      {/* page not found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

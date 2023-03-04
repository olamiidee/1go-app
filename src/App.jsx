import { Routes, Route } from "react-router-dom";
import "./output.css";
import Homepage from "./pages/Homepage";
import { useAppContext } from "./contexts/AppContext";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

// const Homepage = lazy(() => {
//   import("./pages/Homepage");
// });
const About = lazy(() => import("./pages/About"));
const BookRides = lazy(() => import("./pages/BookRides"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Contact = lazy(() => import("./pages/Contact"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Summary = lazy(() => import("./pages/Summary"));
const AdminDashboard = lazy(() => import("./admin/AdminDashboard"));
const BookingTimes = lazy(() => import("./admin/BookingTimes"));
const AdminLogin = lazy(() => import("./admin/AdminLogin"));
const BusRiders = lazy(() => import("./bus riders/BusRiders"));

function App() {
  const { user, admin, activeRidesFromDb, loader } = useAppContext();
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* dashboard controlled access */}
        {user ? (
          <>
            <Route path="/book-ride" element={<BookRides />} />
            <Route path="/book-ride/summary/:id" element={<Summary />} />
          </>
        ) : (
          <Route path="/login" element={<Login />} />
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

        {/* Bus riders page */}
        <Route path="/riders" element={<BusRiders />} />

        {/* page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;

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

function App() {
  const { user, currentUserFromDb } = useAppContext();
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      {user && <Route path="/book-ride" element={<BookRides />} />}
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

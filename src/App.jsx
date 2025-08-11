import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Footer from "./components/Footer";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/event/:eventName" element={<EventPage />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
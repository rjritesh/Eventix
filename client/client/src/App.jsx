import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path = "/login" element = {<Login></Login>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;

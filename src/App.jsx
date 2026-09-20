import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Foodpage from "./pages/Foodpage";
import Navbar from "./Components/Navbar";
import ContactPage from "./pages/Contactpage";
import CartPage from "./pages/Cartpage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Toaster } from "sonner";

function AppContent() {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/signup" ||
    location.pathname === "/login";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Toaster />

      <Routes>
        <Route path="/" element={<Signup />} />

        <Route
          path="/home"
          element={<Homepage />}
        />

        <Route
          path="/food"
          element={<Foodpage cart={cart} setCart={setCart} />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
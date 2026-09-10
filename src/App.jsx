import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Foodpage from "./pages/Foodpage";
import Navbar from "./Components/Navbar";
import ContactPage from "./pages/Contactpage";
import CartPage from "./pages/Cartpage";

 

function App() {
  const[cart ,setCart] = useState([]);
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/food" element={<Foodpage cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />

      </Routes>
    </BrowserRouter>

   
  );
}

export default App;
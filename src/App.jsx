import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Foodpage from "./pages/Foodpage";
import Navbar from "./Components/Navbar";
import ContactPage from "./pages/Contactpage";
import CartPage from "./pages/Cartpage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Toaster } from "sonner";
 

function App() {
  const[cart ,setCart] = useState([]);
  return (
    <BrowserRouter>
    <Navbar/>
     <Toaster />


      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/food" element={<Foodpage cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>

   
  );
}

export default App;
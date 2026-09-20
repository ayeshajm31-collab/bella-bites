import{Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-900 px-8 py-4 text-white">
       {/* Logo */}
      <Link to="/">
        <img
          src="/logo.png"
          alt="Bella Bites"
            className="w-35 h-8 zoom-200 "
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex ml-1 gap-8">
        <Link to="/"
        className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >Home</Link>

        <Link to="/food"
         className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 active:scale-95 transition-all duration-200">🍔Food</Link>

        <Link to="/contact"
        className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 active:scale-95 transition-all duration-200"
        > 📞 Contact</Link>
        
        <Link to="/cart"
        className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 active:scale-95 transition-all duration-200">  🛒 cart</Link>
        

      </div>

      {/* Button */}
      <button className="rounded-lg bg-amber-300 px-5 py-2 hover:bg-amber-500  active:scale-95 transition-all duration-200  text-black">
         <Link to="/food"> order now</Link>
      </button>

    </nav>
  )
}

export default Navbar;
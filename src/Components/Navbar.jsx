import{Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-900 px-8 py-4 text-white">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold">
         🍽️BELLA BITES
      </h1>

      {/* Navigation Links */}
      <div className="flex gap-8">
        <Link to="/">Home</Link>

        <Link to="/food">🍔Food</Link>

        <Link to="/contact"> 📞 Contact</Link>
        
        <Link to="/cart">  🛒 cart</Link>
        

      </div>

      {/* Button */}
      <button className="rounded-lg bg-amber-600 px-5 py-2 hover:bg-amber-500">
         <Link to="/food"> order now</Link>
      </button>

    </nav>
  )
}

export default Navbar;
import { Link } from "react-router-dom";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <footer className="bg-slate-950 text-white px-8 py-12">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold">
            🍽️ BELLA BITES
          </h2>

          <p className="text-gray-400 mt-4 leading-6">
            Delicious food, made with love ❤️
            Fresh ingredients, amazing flavors,
            and a memorable experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-orange-500 cursor-pointer">
              <Link to={'/'}>Home</Link>
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              <Link to={'/food'}>🍔 Food</Link>
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              <Link to={'/contact'}> 📞 Contact</Link>
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              <Link to={'/cart'}> 🛒 Cart </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact Us
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>📍 Karachi, Pakistan</li>
            <li>📞 +92 300 1234567</li>
            <li>✉️ bellabites@gmail.com</li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Opening Hours
          </h3>

          <p className="text-gray-400">
            Monday - Friday
            <br />
            <span className="text-white">11:00 AM - 11:00 PM</span>
          </p>

          <p className="text-gray-400 mt-3">
            Saturday - Sunday
            <br />
            <span className="text-white">12:00 PM - 12:00 AM</span>
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center">

        <p className="text-gray-500 text-sm">
          © 2026 Bella Bites. All rights reserved.
        </p>

        <p className="text-orange-500 text-sm mt-2">
          Made with ❤️ & good food 🍝
        </p>

        <button
          onClick={scrollToTop}
  className="mt-5 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
        >
          ↑ Back to Top
        </button>

      </div>

    </footer>
  );
};

export default Footer;
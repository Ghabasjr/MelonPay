import { useState } from "react";
import { CircleUserRound } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <span className="text-green-600 cursor-pointer font-semibold text-xl">
          MelonPay
        </span>

        {/* Menu Button (Visible on Small Screens) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"} {/* Toggle between X and ☰ */}
        </button>

        {/* Navigation Links (Hidden on Small Screens, Shown on Medium & Large Screens) */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <span className="hover:text-green-600 cursor-pointer">Home</span>
          <span className="hover:text-green-600 cursor-pointer">Payment</span>
          <span className="hover:text-green-600 cursor-pointer">Solutions</span>
          <span className="hover:text-green-600 cursor-pointer">About Us</span>
          <span className="hover:text-green-600 cursor-pointer flex flex-row  gap-2">
            <CircleUserRound />
            Account
          </span>
        </div>
      </div>

      {/* Mobile Menu (Shown When Menu Button is Clicked) */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md p-4 flex flex-col space-y-4 text-gray-700 font-medium">
          <span className="hover:text-green-600 cursor-pointer">Home</span>
          <span className="hover:text-green-600 cursor-pointer">Payment</span>
          <span className="hover:text-green-600 cursor-pointer">Solutions</span>
          <span className="hover:text-green-600 cursor-pointer">About Us</span>
          <span className="hover:text-green-600 cursor-pointer flex flex-row gap-2">
            <CircleUserRound />
            Account
          </span>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

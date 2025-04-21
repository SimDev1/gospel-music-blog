import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaMusic } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Music", path: "/music" },
    { name: "Blog", path: "/blog" },
    { name: "Advertise", path: "/advertise" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
        <FaMusic /> Gospel Vibes
      </Link>

      <ul className="hidden md:flex gap-6">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-500 transition"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Optional: Add auth or CTA buttons here */}
      <div className="hidden md:block">
        <Link
          to="/upload"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Upload Music
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
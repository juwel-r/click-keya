import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  const toggleMobileDropdown = (menu: string) => {
    setMobileOpen(mobileOpen === menu ? null : menu);
  };

  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold text-gray-800">
            DevBrand
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">

            {/* Services */}
            <div className="relative group">
              <NavLink to="/services" className={navLinkStyle}>
                Services
              </NavLink>

              <div className="dropdown">
                <Link to="/services/web">Web Development</Link>
                <Link to="/services/app">App Development</Link>
                <Link to="/services/uiux">UI/UX Design</Link>
                <Link to="/services/seo">SEO Optimization</Link>
              </div>
            </div>

            {/* Account Services */}
            <div className="relative group">
              <NavLink to="/account-services" className={navLinkStyle}>
                Account Services
              </NavLink>

              <div className="dropdown">
                <Link to="/account/facebook">Facebook</Link>
                <Link to="/account/twitter">Twitter</Link>
                <Link to="/account/instagram">Instagram</Link>
                <Link to="/account/youtube">YouTube</Link>
              </div>
            </div>

            {/* Offline Services */}
            <div className="relative group">
              <NavLink to="/offline-services" className={navLinkStyle}>
                Offline Services
              </NavLink>

              <div className="dropdown">
                <Link to="/offline/repair">Computer Repair</Link>
                <Link to="/offline/network">Network Setup</Link>
                <Link to="/offline/printer">Printer Service</Link>
                <Link to="/offline/cctv">CCTV Installation</Link>
              </div>
            </div>

            {/* Products */}
            <div className="relative group">
              <NavLink to="/products" className={navLinkStyle}>
                Products
              </NavLink>

              <div className="dropdown">
                <Link to="/products/laptop">Laptop</Link>
                <Link to="/products/accessories">Accessories</Link>
                <Link to="/products/software">Software</Link>
                <Link to="/products/custom-pc">Custom PC</Link>
              </div>
            </div>

          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">

          {[
            { name: "services", label: "Services" },
            { name: "account", label: "Account Services" },
            { name: "offline", label: "Offline Services" },
            { name: "products", label: "Products" },
          ].map((menu) => (
            <div key={menu.name}>
              <button
                className="w-full text-left py-2 font-medium"
                onClick={() => toggleMobileDropdown(menu.name)}
              >
                {menu.label}
              </button>

              {mobileOpen === menu.name && (
                <div className="pl-4 space-y-1 text-sm text-gray-600">
                  <Link to="#" className="block py-1">Item 1</Link>
                  <Link to="#" className="block py-1">Item 2</Link>
                  <Link to="#" className="block py-1">Item 3</Link>
                  <Link to="#" className="block py-1">Item 4</Link>
                </div>
              )}
            </div>
          ))}

        </div>
      )}

      {/* Dropdown Styles */}
      <style>
        {`
          .dropdown {
            position: absolute;
            left: 0;
            margin-top: 0.5rem;
            width: 200px;
            background: white;
            border-radius: 0.75rem;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            padding: 0.5rem 0;
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: all 0.2s ease;
          }

          .group:hover .dropdown {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .dropdown a {
            display: block;
            padding: 0.5rem 1rem;
          }

          .dropdown a:hover {
            background: #f0f9ff;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white  px-20 shadow-md h-16">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center p-3 mt-0">
          <img
            src="src\assets\images\logo-pcs-global.jpg"
            alt="Logo"
            className="w-auto h-10 rounded-md"
          />
        </div>
        <div className="flex gap-8 p-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/contact" className="hover:underline">
            Comapany
          </Link>
          <Link to="/contact" className="hover:underline">
            Services
          </Link>
          <Link to="/contact" className="hover:underline">
            Partners
          </Link>
          <Link to="/contact" className="hover:underline">
            Careers
          </Link>
          <Link to="/contact" className="hover:underline"></Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

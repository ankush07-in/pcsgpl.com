import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-pcs-global.jpg";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/company", label: "Company" },
  { path: "/services", label: "Services" },
  { path: "/partners", label: "Partners" },
  { path: "/careers", label: "Careers" },
];

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white px-6 sm:px-20 shadow-md h-16">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="p-2">
          <img src={logo} alt="Logo" className="h-10 w-auto rounded-md" />
        </div>
        <div className="hidden md:flex gap-6 p-4">
          {navItems.map(({ path, label }) => (
            <Link key={label} to={path} className="hover:underline">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

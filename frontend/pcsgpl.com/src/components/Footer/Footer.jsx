import logo from "../../assets/images/logo-pcs-global.jpg";

function Footer() {
    return (
      <footer className="bg-blue-900 text-white mt-2">
        <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <img
              src={logo}
              alt="PCS Global Logo"
              className="h-12 w-auto mb-4 rounded shadow-sm"
            />
            <p className="text-sm text-gray-300">
              PCS Global Pvt. Ltd.<br />
              Empowering individuals. Transforming businesses.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/careers" className="hover:underline">Careers</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
  
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Web Development</li>
              <li>Training & Placement</li>
              <li>IT Infrastructure</li>
              <li>Consulting</li>
              <li>Tech Support</li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="facebook.com" aria-label="Facebook" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="linkedin.com" aria-label="LinkedIn" className="hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="instagram.com" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="twitter.com" aria-label="Twitter" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
  
        <div className="text-center py-6 text-sm border-t border-blue-800 text-gray-400">
          © {new Date().getFullYear()} PCS Global Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
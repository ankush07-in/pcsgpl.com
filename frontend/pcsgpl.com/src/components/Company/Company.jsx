import Footer from "../Footer/Footer";

function Company() {
    return (
      <div className="bg-white">
        {/* Hero */}
        <section className="text-center py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
          <h1 className="text-4xl font-bold mb-2">About PCS Global</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Building a world where talent meets opportunity, technology drives impact, and careers find purpose.
          </p>
        </section>
  
        {/* Mission + Vision */}
        <section className="py-16 px-4 md:px-20 bg-gray-50">
          <div className="max-w-5xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Mission</h2>
              <p className="text-gray-700">
                To empower individuals and organizations with high-quality IT solutions, guided mentorship, and ethical values —
                creating meaningful careers and long-term impact.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Vision</h2>
              <p className="text-gray-700">
                To be India's most trusted name in tech education, consulting, and innovation — bringing smiles and success to every home.
              </p>
            </div>
          </div>
        </section>
  
        {/* Leadership */}
        <section className="py-16 px-4 md:px-20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-10">Leadership</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <img src="https://pcsglobal.in/assets/images/about/7.jpg" alt="Founder" className="w-32 h-32 rounded mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Mr. Alok Halder</h3>
                <p className="text-gray-600 text-sm">Founder & Visionary Leader</p>
              </div>
              <div>
                <img src="https://pcsglobal.in/assets/images/about/ceo.jpg" alt="CEO" className="w-32 h-32 rounded mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Mr. Sunit Chaudhuri</h3>
                <p className="text-gray-600 text-sm">Chief Executive Officer</p>
              </div>
              <div>
                <img src="https://pcsglobal.in/assets/images/about/Debamitra_Banerjee-removebg-preview.png" alt="CEO" className="w-32 h-32 rounded mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Debamitra Banerjee</h3>
                <p className="text-gray-600 text-sm">C.I.O</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Stats / Achievements */}
        <section className="py-16 bg-blue-50 px-4 md:px-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-700">1300+</h3>
              <p className="text-gray-600 mt-2">IT Professionals Placed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-700">5000+</h3>
              <p className="text-gray-600 mt-2">Clients Engaged</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-700">15+</h3>
              <p className="text-gray-600 mt-2">Years of Service</p>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
  
  export default Company;
  
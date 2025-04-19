function Partners() {
    return (
      <div className="bg-white">
        {/* Hero */}
        <section className="text-center py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
          <h1 className="text-4xl font-bold mb-2">Our Partners</h1>
          <p className="text-lg max-w-3xl mx-auto">
            We collaborate with industry leaders, academic institutions, and technology innovators to build a better digital future together.
          </p>
        </section>
  
        {/* Why Partner With Us */}
        <section className="py-16 px-4 md:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Why Partner with PCS Global?</h2>
              <p className="text-gray-700 mb-4">
                Partnerships are at the heart of our mission. We believe in co-creating value through innovation, education, and mutual success.
                Whether you're a company, startup, college, or training center — we’d love to explore synergies.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access to skilled & job-ready tech talent</li>
                <li>Joint ventures on training & development</li>
                <li>Tech consulting, workshops, and events</li>
                <li>CSR-aligned educational initiatives</li>
              </ul>
            </div>
            <img
              src="assets/images/partners/handshake.jpg"
              alt="Partner with us"
              className="rounded-lg shadow-sm"
            />
          </div>
        </section>
  
        {/* Trusted By */}
        <section className="py-20 px-4 md:px-20 bg-white text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-10">Trusted By</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            <img src="assets/images/partners/company1.png" alt="Partner 1" className="h-12 grayscale hover:grayscale-0 transition" />
            <img src="assets/images/partners/company2.png" alt="Partner 2" className="h-12 grayscale hover:grayscale-0 transition" />
            <img src="assets/images/partners/company3.png" alt="Partner 3" className="h-12 grayscale hover:grayscale-0 transition" />
            <img src="assets/images/partners/company4.png" alt="Partner 4" className="h-12 grayscale hover:grayscale-0 transition" />
            <img src="assets/images/partners/company5.png" alt="Partner 5" className="h-12 grayscale hover:grayscale-0 transition" />
          </div>
        </section>
  
        {/* Partnership Types */}
        <section className="py-16 bg-gray-50 px-4 md:px-20">
          <h2 className="text-2xl font-bold text-blue-800 text-center mb-10">Types of Partnerships</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Corporate Collaboration</h3>
              <p className="text-gray-600 text-sm">
                Joint ventures with companies for talent outsourcing, project execution, or training services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Academic Alliances</h3>
              <p className="text-gray-600 text-sm">
                Partnering with universities and colleges to bridge the skill gap and make students industry-ready.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">NGO / CSR Projects</h3>
              <p className="text-gray-600 text-sm">
                Collaborating on educational or social development projects aligned with corporate responsibility.
              </p>
            </div>
          </div>
        </section>
  
        {/* CTA */}
        <section className="bg-blue-600 text-white text-center py-16 px-4">
          <h2 className="text-2xl font-semibold mb-4">Let's Build Something Meaningful Together</h2>
          <p className="mb-6 text-sm max-w-xl mx-auto">
            If you're passionate about innovation, empowerment, and creating a digital-first India — we'd love to hear from you.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-2 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100 transition"
          >
            Become a Partner
          </a>
        </section>
      </div>
    );
  }
  
  export default Partners;
  
function Services() {
    return (
      <div className="bg-gray-50">
        {/* Hero */}
        <section className="text-center py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We offer a full suite of IT services to help you grow, secure, and innovate your business — from software to staffing and everything in between.
          </p>
        </section>
  
        {/* Services Grid */}
        <section className="py-20 px-4 md:px-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Software Development</h3>
              <p className="text-gray-600 mb-4">
                Custom web and enterprise applications tailored to your business needs — built to scale, secure, and designed for performance.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Web & Mobile Applications</li>
                <li>CRM / ERP Systems</li>
                <li>Agile & Secure Development</li>
              </ul>
            </div>
  
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Training & Placement</h3>
              <p className="text-gray-600 mb-4">
                Empowering freshers and professionals with skill-based, job-ready training programs — and placing them where they shine.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Full-Stack Development</li>
                <li>Corporate Training Programs</li>
                <li>Campus Recruitment Drives</li>
              </ul>
            </div>
  
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Talent Outsourcing</h3>
              <p className="text-gray-600 mb-4">
                Need skilled professionals fast? We provide project-based or long-term staffing to power your growth, without the overhead.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>IT Staff Augmentation</li>
                <li>On-Demand Hiring</li>
                <li>Dedicated Remote Teams</li>
              </ul>
            </div>
  
            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Technical Support</h3>
              <p className="text-gray-600 mb-4">
                Reliable and prompt tech support for both businesses and individuals — keeping systems secure and efficient 24/7.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Remote & On-site Support</li>
                <li>Network Security & Backup</li>
                <li>Hardware & Software Support</li>
              </ul>
            </div>
  
            {/* Card 5 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">IT Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                From planning to deployment — we help businesses modernize, manage, and secure their entire IT ecosystem.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Data Centers & Cloud Integration</li>
                <li>Enterprise Network Architecture</li>
                <li>Disaster Recovery</li>
              </ul>
            </div>
  
            {/* Card 6 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Consulting Services</h3>
              <p className="text-gray-600 mb-4">
                Strategic advisory to help you make confident decisions — from digital transformation to system integration planning.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Tech Roadmaps & Audits</li>
                <li>Business Process Automation</li>
                <li>Cloud Migration Strategy</li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="bg-blue-600 text-white text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Need a custom solution for your business?</h2>
          <p className="mb-6 text-sm">
            Let’s talk about how PCS Global can partner with you to build your next digital product or transform your IT systems.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-2 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100 transition"
          >
            Schedule a Consultation
          </a>
        </section>
      </div>
    );
  }
  
  export default Services;
  
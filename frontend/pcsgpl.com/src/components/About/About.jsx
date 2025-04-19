import Footer from "../../components/Footer/Footer";
import  mission from "../../assets/sliders/alok-photo2.jpg";
import buildCareers from "../../assets/sliders/5.jpg";

function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-center py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(assets/images/sliders/6.jpg)" }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg">
              We are experienced professionals who understand that IT services
              is changing, and are true partners who care about your success.
            </p>
          </div>
        </div>
      </section>

      {/* About Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col xl:flex-row gap-12">
          {/* Left Column */}
          <div className="w-full xl:w-5/12 space-y-10">
            {/* Section: Inspiration */}
            <div className="space-y-4">
              <img
                src="https://pcsglobal.in/assets/images/about/guru-blessings.jpg"
                alt="Guru Blessings"
                className="w-full rounded-md object-cover"
              />
              <h2 className="text-xl font-semibold text-blue-800">
                A Vision Inspired by Compassion & Service
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PCS Global is inspired by Sri Sri Ravi Shankar’s teachings —
                we’re not just building careers, we're nurturing confidence,
                purpose, and impact in young professionals across India.
              </p>
            </div>

            {/* Section: Social Impact */}
            <div className="space-y-4">
              <img
                src={mission}
                alt="Mission"
                className="w-full rounded-md object-cover"
              />
              <h2 className="text-xl font-semibold text-blue-800">
                Building Careers That Matter
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Over the years, we've helped thousands of students, graduates,
                and professionals find direction in their careers. Our mission
                is to uplift unplaced engineers and give them a reason to smile
                again.
              </p>
            </div>

            {/* Section: Culture */}
            <div className="space-y-4">
              <img
                src={buildCareers}
                alt="Build Career"
                className="w-full rounded-md object-cover"
              />
              <h2 className="text-xl font-semibold text-blue-800">
                Culture of Growth and Gratitude
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At PCS Global, we embrace an open, empowering, and
                mentorship-driven work culture. Our team is our family — and
                every smile counts.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full xl:w-6/12 xl:ml-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-blue-900">
                PCS Global: Perennation Computer Solutions
              </h2>
              <p className="text-gray-700">
                "Perennation" means never perishing. That’s the heart of our
                name — we exist to create value that lasts.
              </p>
              <p className="italic text-yellow-800 font-medium">
                “Let your smile change the world! Never let the world change
                your smile.” – Sri Sri Ravi Shankar
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-blue-800">
                What We Stand For:
              </h3>
              <ul className="list-disc list-inside text-gray-800">
                <li>Ethical, purpose-driven work</li>
                <li>Upskilling the youth of India</li>
                <li>Delivering market-ready tech solutions</li>
              </ul>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-blue-800">
                What We Do
              </h3>
              <p className="text-gray-700">
                PCS Global provides a portfolio of IT services that power
                digital transformation. From app development to data center
                management, we deliver secure, scalable, and future-ready
                solutions.
              </p>
              <ul className="list-disc list-inside text-gray-800 mt-2">
                <li>Web Development & System Integration</li>
                <li>Training & Placement Programs</li>
                <li>Enterprise Infrastructure & Consulting</li>
                <li>Technical Support Services</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Why PCS Global?
              </h3>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>1330+ IT professionals placed in top companies</li>
                <li>5000+ client interactions delivered with care</li>
                <li>Solutions crafted by industry experts</li>
              </ul>
              <a
                href="#"
                className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
              >
                Schedule An Appointment
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;

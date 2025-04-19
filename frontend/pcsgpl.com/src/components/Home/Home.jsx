import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <div className="text-center px-4">
        <Slider />
        <h1 className="text-3xl font-bold text-blue-600 mt-6">
          Welcome to PCS GLOBAL
        </h1>
        <p className="mt-4 text-gray-600">
          Perennation Computer Solutions Global Private Limited
        </p>
        <p className="mt-4 text-gray-700">
          PCS Global is a Web development company located in Bengaluru and Kolkata, India.
        </p>
        <p className="mt-2 text-yellow-900 text-sm max-w-2xl mx-auto">
          We provide businesses with a centralized system to streamline and automate various processes related to customer interactions, sales pipeline management, analytics, and collaboration.
        </p>
      </div>

      {/* Services Section */}
      <section className="mt-10 px-4 md:px-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-lg font-bold text-blue-500 mb-2">Web Development</h3>
            <p className="text-sm text-gray-700">Custom websites built with modern technologies tailored to your needs.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-lg font-bold text-blue-500 mb-2">CRM Solutions</h3>
            <p className="text-sm text-gray-700">Automate your sales and customer support processes efficiently.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-lg font-bold text-blue-500 mb-2">Mobile App Development</h3>
            <p className="text-sm text-gray-700">Cross-platform mobile apps for both Android and iOS devices.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 bg-blue-100 py-10 px-4 text-center">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Ready to Transform Your Business?</h2>
        <p className="mb-6 text-gray-700">
          Let PCS Global be your technology partner in success.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      {/* <footer className="bg-blue-600 text-white text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} PCS Global. All rights reserved.</p>
      </footer> */}
      <Footer/>
    </>
  );
}

export default Home;

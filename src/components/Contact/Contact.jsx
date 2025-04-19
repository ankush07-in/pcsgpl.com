import Footer from "../../components/Footer/Footer";

function Contact() {
  return (
    <>
    <div className="px-4 md:px-20 py-12 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-10">
          We'd love to hear from you! Fill out the form below or reach out via email and we'll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <form className="space-y-6 text-left">
          <div>
            <label className="block mb-2 text-sm text-gray-600">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-600">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-600">Message</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Contact;

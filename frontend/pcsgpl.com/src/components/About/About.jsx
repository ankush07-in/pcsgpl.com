function About() {
  return (
    <>
      <section className="relative text-center py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(assets/images/sliders/6.jpg)' }}></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg">We are experienced professionals who understand that IT services is changing, and are true partners who care about your success.</p>
          </div>
        </div>
      </section>

      {/* About Layout */}
      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-wrap">
          <div className="w-full xl:w-5/12 mb-10 xl:mb-0">
            <div className="space-y-6">
              <img src="assets/images/about/guru-blessings.jpg" alt="about" className="w-full rounded" />
              <h2 className="text-lg font-semibold">An organization inspired by our master of love & smile to impact millions of lives in our society</h2>
              <img src="assets/images/about/1.jpg" alt="about" className="w-full rounded" />
              <h2 className="text-lg font-semibold">You can come here with worries about your career path or business but you will not return with them. Drop all worries here & start a new life, new career, or business.</h2>
              <img src="assets/images/about/our-mission.jpg" alt="about" className="w-full rounded" />
              <h2 className="text-lg font-semibold">Our mission is to bring back smiles to every unplaced engineer in India by upskilling and establishing their professional career paths.</h2>
              <img src="assets/images/about/buildyourcareer.jpg" alt="about" className="w-full rounded" />
              <h2 className="text-lg font-semibold">Come and build your career here. Join hands with us to uplift yourself. Fly high again. Let your smile change the world!</h2>
            </div>
          </div>

          <div className="w-full xl:w-6/12 xl:ml-auto">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">PCS Global: P stands for Perennation (Which never perish)</h2>
              <h2 className="text-xl font-semibold">PCS Global: An Ethical Organization</h2>
              <h2 className="text-xl font-semibold">PERENNATION COMPUTER SOLUTIONS GLOBAL PRIVATE LIMITED</h2>
              <h2 className="text-xl font-semibold">Blessed & Inspired by Sri Sri Ravi Shankar</h2>
              <h2 className="italic text-xl font-semibold">"Let your smile change the world! Never let the world change your smile!" - Sri Sri Ravi Shankar</h2>
              <h2 className="text-xl font-semibold">Improve Efficiency and Provide Better Experiences!</h2>
              <h3 className="text-2xl font-bold">Keep Your Business Safe & Ensure High Availability.</h3>

              <div className="text-gray-700 space-y-4">
                <p className="font-medium">PERENNATION COMPUTER SOLUTIONS GLOBAL PRIVATE LIMITED (PCS Global Pvt. Ltd.) partners efficiently with our clients to deliver the best customized solutions that help them sustain market competition. Our experts utilize industry experience and expertise to shape your requirements across all sectors.</p>
                <p className="font-medium">We provide a portfolio of IT Services, Software, and Networking solutions to solve critical problems for clients. We specialize in securing operations, increasing data center efficiency, enhancing end-user support, and modernizing enterprise applications.</p>
                <p className="font-medium">We offer Web Development, Systems Integration, Consulting, Infrastructure, Maintenance, and High-End Server Solutions across sectors like Corporate Institutes, Tourism, Banking, Telecom, Media, and more.</p>
              </div>

              <a href="#" className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">Schedule An Appointment</a>

              <ul className="mt-10 space-y-2 list-disc list-inside text-gray-800">
                <li>PCS Global contributed 1330+ IT Professionals to the industry</li>
                <li>Engaged in more than 5,000 client interactions</li>
                <li>Experts provided critical solutions for major challenges</li>
              </ul>

              <a href="#" className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">PCS Global Primary Services</a>
              <ul className="mt-10 space-y-2 list-disc list-inside text-gray-800">
                <li>Software Development</li>
                <li>Training and Placement</li>
                <li>Talent Outsourcing</li>
                <li>Technical Support (Individuals & Companies)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

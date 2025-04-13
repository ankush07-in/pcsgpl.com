function Careers() {
    return (
      <div className="bg-gray-50">
        {/* Hero */}
        <section className="text-center py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
          <h1 className="text-4xl font-bold mb-2">Join Our Team</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Be part of a movement that's transforming lives and launching meaningful careers. We’re always on the lookout for curious minds and kind hearts.
          </p>
        </section>
  
        {/* Career Tiers */}
        <section className="py-16 px-4 md:px-20">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Intern */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold text-blue-800">Internship</h3>
              <p className="text-gray-600 my-4">Kickstart your career with hands-on projects and expert mentorship.</p>
              <ul className="list-disc list-inside text-sm text-gray-700 text-left w-full">
                <li>Live project exposure</li>
                <li>Certificate & LOR</li>
                <li>Flexible hours</li>
              </ul>
              <a
                href="#"
                className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
              >
                Apply Now
              </a>
            </div>
  
            {/* Junior Developer */}
            <div className="bg-white border border-blue-600 rounded-lg p-6 flex flex-col items-center text-center shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800">Junior Developer</h3>
              <p className="text-gray-600 my-4">Contribute to real projects, grow your skills, and join our impact-driven mission.</p>
              <ul className="list-disc list-inside text-sm text-gray-700 text-left w-full">
                <li>Minimum 1 year of experience</li>
                <li>Mentor support & team collaborations</li>
                <li>Growth opportunities</li>
              </ul>
              <a
                href="#"
                className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
              >
                Apply Now
              </a>
            </div>
  
            {/* Senior / Team Lead */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold text-blue-800">Senior Developer / Team Lead</h3>
              <p className="text-gray-600 my-4">Lead teams, architect systems, and drive innovation at PCS Global.</p>
              <ul className="list-disc list-inside text-sm text-gray-700 text-left w-full">
                <li>3+ years of hands-on experience</li>
                <li>Leadership role</li>
                <li>Project ownership</li>
              </ul>
              <a
                href="#"
                className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>
  
        {/* Perks Section */}
        <section className="py-16 bg-white px-4 md:px-20 text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Why Work With Us?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            We're a people-first company. That means flexible work, mentorship culture, real projects, and a chance to make meaningful impact.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">📈 Career Growth</h4>
              <p className="text-gray-700 text-sm">Regular upskilling and leadership training programs</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">🤝 Team Culture</h4>
              <p className="text-gray-700 text-sm">We celebrate diversity, collaboration, and mutual respect</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">🎯 Purposeful Work</h4>
              <p className="text-gray-700 text-sm">Everything we do is centered around helping people grow</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Careers;
  
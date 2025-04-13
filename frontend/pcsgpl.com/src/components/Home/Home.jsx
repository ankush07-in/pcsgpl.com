import Slider from "../Slider/Slider";
function Home() {
  return (
    <>
      <div className="text-center">
        <Slider />
        <h1 className="text-3xl font-bold text-blue-600">
          Welcome to PCS GLOBAL
        </h1>
        <p className="mt-4 text-gray-600">
          Perennation Computer Solutions Global Private Limited
        </p>
        <p className="mt-4 text-black-300">
          PCS Global is a Web development company located in Bengaluru and Kolkata, India.
        </p>
        <p className="mt-2 text-yellow-900 text-sm">
          We provide businesses with a centralized system to streamline and automate various processes related to customer interactions, sales pipeline management, analytics, and collaboration.
        </p>
      </div>
    </>
  );
}

export default Home;

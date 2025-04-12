import Slider from "../Slider/Slider";
function Home() {
  return (
    <>
      <div className="text-center">
        <Slider />
        <h1 className="text-3xl font-bold text-blue-600">
          Welcome to Home Page
        </h1>
        <p className="mt-4 text-gray-600">
          This is the homepage of our website.
        </p>
      </div>
    </>
  );
}

export default Home;

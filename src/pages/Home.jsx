// src/pages/Home.jsx
import Hero from "../components/Hero";
import Services from "../components/Services"; // Make sure Services.jsx is in components folder

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
    </div>
  );
};

export default Home;

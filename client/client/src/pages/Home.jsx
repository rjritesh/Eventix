import FeaturedEvents from "../components/FeaturedEvents";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero></Hero>
      <FeaturedEvents></FeaturedEvents>
    </>
  );
};

export default Home;
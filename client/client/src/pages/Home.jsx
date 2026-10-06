import BrowseByCategory from "../components/BrowseByCategory";
import FeaturedEvents from "../components/FeaturedEvents";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero></Hero>
      <FeaturedEvents></FeaturedEvents>
      <BrowseByCategory></BrowseByCategory>
    </>
  );
};

export default Home;
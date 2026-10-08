import BrowseByCategory from "../components/BrowseByCategory";
import FeaturedEvents from "../components/FeaturedEvents";
import GetInTouch from "../components/GetInTouch";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <>

      <Hero></Hero>
      <FeaturedEvents></FeaturedEvents>
      <BrowseByCategory></BrowseByCategory>
      <GetInTouch></GetInTouch>
    </>
  );
};

export default Home;
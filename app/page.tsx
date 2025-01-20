import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import TopProducts from "@/components/TopProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <TopProducts />
      <Banner />
      <NewProducts />
    </>
  );
};

export default Home;

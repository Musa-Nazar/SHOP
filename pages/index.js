import BrowseSection from "@/components/BrowseSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Line from "@/components/Line";
import Navbar from "@/components/Navbar";
import ProductDisplay from "@/components/ProductDisplay";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import data, { data1 } from "@/data/data";

function index() {
  const xml = (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <ProductDisplay heading="NEW ARRIVALS" items={data1} />
      <Line />
      <ProductDisplay
        heading="TOP SELLING"
        items={data}
        className="!pb-[8rem] !max-lg:pb-[5rem]"
      />
      <BrowseSection />
      <Testimonials />
      <Footer />
    </>
  );
  return xml;
}

export default index;

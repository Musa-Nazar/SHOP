import Footer from "@/components/Footer";
import Line from "@/components/Line";
import Navbar from "@/components/Navbar";
import NavDirection from "@/components/NavDirection";
import ShopProductDisplay from "@/components/ShopProductDisplay";

function index() {
  const xml = (
    <>
      <Navbar />
      <Line />
      <NavDirection />
      <ShopProductDisplay />
      <div className="mb-[10rem]"></div>
      <Footer />
    </>
  );
  return xml;
}

export default index;

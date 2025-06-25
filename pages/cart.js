import CartContainer from "@/components/CartContainer";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavDirection from "@/components/NavDirection";
import React from "react";

function cart() {
  const xml = (
    <>
      <Navbar />
      <NavDirection paths={["cart"]} />
      <CartContainer />
      <Footer />
    </>
  );
  return xml;
}

export default cart;

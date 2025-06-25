import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavDirection from "@/components/NavDirection";
import ProductDetail from "@/components/ProductDetail";
import { Suspense } from "react";

function productId({ id }) {
  const xml = (
    <>
      <Navbar />
      <NavDirection />
      <Suspense
        fallback={
          <p className="text-center font-bold satoshi-bold text-black text-[1.7rem]">
            Loading...
          </p>
        }
      >
        <ProductDetail id={id} />
      </Suspense>
      <Footer />
    </>
  );
  return xml;
}

export default productId;

export function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          productId: "0",
        },
      },
      {
        params: {
          productId: "1",
        },
      },
    ],
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      id: params.productId,
    },
    revalidate: 1,
  };
}

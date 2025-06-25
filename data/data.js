const data = [
  {
    id: 0,
    img: "/assets/top-sell-1.jpg",
    title: "Vertical Striped Shirt".toLocaleLowerCase(),
    rating: 5,
    price: 212,
    originalPrice: 232,
    get discountPercentage() {
      const discount =
        ((this.originalPrice - this.price) * 100) / this.originalPrice;
      return discount.toFixed(2);
    },
    desc: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    id: 1,
    img: "/assets/top-sell-2.jpg",
    title: "COURAGE GRAPHIC T-SHIRT".toLocaleLowerCase(),
    rating: 4,
    price: 145,
    originalPrice: "",
    discountPercentage: "",
    desc: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    id: 2,
    img: "/assets/top-sell-3.jpg",
    title: "LOOSE FIT BERMUDA SHORTS".toLocaleLowerCase(),
    rating: 3,
    price: 80,
    originalPrice: "",
    discountPercentage: "",
    desc: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    id: 3,
    img: "/assets/top-sell-4.jpg",
    title: "FADED SKINNY JEANS".toLocaleLowerCase(),
    rating: 4.5,
    price: 210,
    originalPrice: "",
    discountPercentage: "",
    desc: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
];

export const data1 = [
  {
    id: Math.random(),
    img: "/assets/new-item-1.jpg",
    title: "T-Shirt With Tape Details",
    rating: 4.5,
    price: 120,
    originalPrice: "",
    discountPercentage: "",
    desc: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    id: Math.random(),
    img: "/assets/new-item-2.jpg",
    title: "Skinny Fit Jeans",
    rating: 3.5,
    price: 240,
    originalPrice: 260,
    discountPercentage: 20,
    desc: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    id: Math.random(),
    img: "/assets/new-item-3.jpg",
    title: "Checkered Shirt",
    rating: 4.5,
    price: 180,
    originalPrice: "",
    discountPercentage: "",
    desc: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    id: Math.random(),
    img: "/assets/new-item-4.jpg",
    title: "Sleeve Striped T-shirt",
    rating: 4.5,
    price: 120,
    originalPrice: 160,
    discountPercentage: 30,
    desc: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
];

export const testimonials = [
  {
    name: "Sarah M.",
    ratings: 5,
    testimony:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
  },
  {
    name: "Alex K.",
    ratings: 5,
    testimony:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
  },
  {
    name: "James L.",
    ratings: 5,
    testimony:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
  },
  {
    name: "James L.",
    ratings: 5,
    testimony:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
  },
  {
    name: "James L.",
    ratings: 5,
    testimony:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
  },
];
export default data;

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "./CartContext";

const Online = () => {
  const { addToCart } = useCart();

  const menuItems = [
    { id: 1, name: "Pizza", price: 250, imgSrc: 'https://assets.zeezest.com/images/PROD_Hundo_pizza_1638881410000.jpg' },
    { id: 2, name: "Burger", price: 120, imgSrc: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: "Pasta", price: 200, imgSrc: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, name: "Fries", price: 100, imgSrc: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 5, name: "Ice Cream", price: 90, imgSrc: 'https://i.ytimg.com/vi/7gJIyHnD710/hq720.jpg' },
    { id: 6, name: "Coke", price: 50, imgSrc: 'https://cdn.uengage.io/uploads/18085/image-179182-1711711756.jpeg' },
    { id: 7, name: "Mini-Thali", price: 350, imgSrc: 'https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 8, name: "Cheese Pizza", price: 250, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzS1ddKJagkuBK2981pZScsFOsU6tGpZn_A&s' },
    { id: 9, name: "Mutton Biryani", price: 450, imgSrc: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg' },
    { id: 10, name: "Tandoori Paneer", price: 280, imgSrc: 'https://i0.wp.com/spicediary.com/wp-content/uploads/2020/04/20200414_195733-3-scaled.jpg?fit=780%2C933' },
    { id: 11, name: "Veg Biryani", price: 350, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf4Pe72Y3ivmCBNtcifhQa4_RFmEZL-wKl4A&s' },
    { id: 12, name: "Paneer kebabs", price: 250, imgSrc: 'https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg' },
  ];

  const carouselImages = [
    "https://www.cardexpert.in/wp-content/uploads/2021/12/taj-shareholder-offer-stay-dining.png",
    "https://livefromalounge.com/wp-content/uploads/2016/07/Taj-Promo-Featured-Image.png",
    "https://images.trvl-media.com/lodging/20000000/19460000/19458500/19458493/8cf0d468.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    "https://b.zmtcdn.com/data/pictures/1/18814841/28849cb41998ab0d0461dc095b120563.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="p-5 bg-amber-50">
      {/* Carousel */}
      <div className="relative w-full h-[700px] mb-10 mt-[130px]">
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10"
          onClick={prevImage}
        >
          <ChevronLeft />
        </button>
        <img
          src={carouselImages[currentIndex]}
          alt="carousel"
          className="w-full h-full object-cover rounded-xl"
        />
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10"
          onClick={nextImage}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Menu */}
      <h2 className="text-4xl font-bold mb-6 text-center">🍽 Online Menu</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 shadow-md rounded-lg p-4 text-center text-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.imgSrc}
              alt={item.name}
              className="w-full h-[500px] object-cover rounded-md"
            />
            <h3 className="mt-4 font-semibold text-4xl">{item.name}</h3>
            <p className="text-4xl mt-2 mb-4">₹{item.price}</p>
            <button
              onClick={() => addToCart({ ...item, quantity: 1 })}
              className="bg-amber-800 hover:bg-amber-900 text-white px-4 py-2 rounded text-2xl"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Online;

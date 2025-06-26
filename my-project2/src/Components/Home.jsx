import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source
            src="https://videos.pexels.com/video-files/6139587/6139587-uhd_1440_2560_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold">Welcome to Taj Restaurant</h1>
        <p className="mt-4 text-2xl md:text-4xl font-semibold">
          Delicious food, crazy atmosphere, let the magic begin
        </p>
      </div>
    </section>
  );
};

const Chefs = () => {
  const chefs = [
    {
      name: "Chef Arjun",
      title: "Executive Chef",
      image:
        "https://t3.ftcdn.net/jpg/02/65/16/18/360_F_265161867_nUORzZ1sfwADG6RoOsCPdf81KKYQdD3G.jpg",
    },
    {
      name: "Chef Riya",
      title: "Pastry Chef",
      image:
        "https://c8.alamy.com/comp/BT0M92/young-beautiful-female-chef-portrait-in-kitchen-BT0M92.jpg",
    },
    {
      name: "Chef Kabir",
      title: "Sous Chef",
      image:
        "https://i.pinimg.com/474x/d2/35/47/d2354797cfb995122e8bf0248cb1fd76.jpg",
    },
  ];

  return (
    <section className="py-12 bg-orange-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <marquee className="text-2xl">Welcome to Taj Chefs section</marquee>
        <h2 className="text-5xl font-bold text-gray-800 mb-6">Our Chefs</h2>
        <p className="text-3xl text-gray-600 mb-12 max-w-xl mx-auto">
          Meet the talented culinary artists behind our kitchen. Each brings
          their own flavor and finesse to your plate.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="bg-yellow-200 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <img
                src={chef.image}
                alt={chef.name}
                className="w-52 h-52 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                {chef.name}
              </h3>
              <p className="text-xl text-gray-700">{chef.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contactus = () => {
  return (
    <section className="bg-[radial-gradient(black,_grey)] text-white px-6 py-12 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
      <p className="text-2xl">Phone: 676767777</p>
      <p className="text-2xl">Email: taj@gmail.com</p>
      <p className="text-2xl mb-4">Follow us: www.crazyttaj.com</p>
      <div className="flex justify-center gap-6 text-5xl animate-pulse mb-8">
        <FaInstagram className="text-red-400" />
        <FaTwitter className="text-blue-400" />
        <FaFacebook className="text-yellow-400" />
      </div>
      <div className="mb-6">
        <h3 className="text-4xl text-yellow-400 mb-4">Our Branches</h3>
        <ul className="space-y-2 text-2xl">
          <li>Mumbai - Marine Drive</li>
          <li>Delhi - Connaught Place</li>
          <li>Bangalore - MG Road</li>
          <li>Hyderabad - Banjara Hills</li>
          <li>Chennai - Marina Beach</li>
        </ul>
      </div>
      <p className="italic text-3xl max-w-2xl mx-auto">
        Taj Hotels is renowned for its world-class service, timeless heritage,
        and luxurious experiences. Come experience royalty with us!
      </p>
      
    </section>
  );
};

function App() {
  return (
    <div>
      <Home />
      <Chefs />
      <Contactus />
    </div>
  );
}

export default App;

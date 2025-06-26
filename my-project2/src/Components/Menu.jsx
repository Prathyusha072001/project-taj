import React, { useState } from 'react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Fast Food', 'Biryani', 'Desserts', 'Salads', 'Thali', 'Beverages', 'Main Course', 'Starters'];

  const menuItems = [
    { name: 'Dessert', price: '₹120', category: 'Desserts', imgSrc: 'https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Icecream', price: '₹140', category: 'Desserts', imgSrc: 'https://i.ytimg.com/vi/7gJIyHnD710/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHfe63JrJfD1vFINXuxXNpJocF8A' },
    { name: 'veg Pulao', price: '₹179', category: 'Main Course', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf4Pe72Y3ivmCBNtcifhQa4_RFmEZL-wKl4A&s' },
    { name: 'veg Pizza', price: '₹169', category: 'Fast Food', imgSrc: 'https://assets.zeezest.com/images/PROD_Hundo_pizza_1638881410000.jpg' },
    { name: 'Chicken Biryani', price: '₹320', category: 'Biryani', imgSrc: 'https://moha-mushkil.com/wp-content/uploads/2016/02/IMG_1651.jpg' },  
    { name: 'Fruit salad', price: '₹420', category: 'Salads', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVqF-AgkD-FKTIU8jPGfywGkhWtPFLMX4qiA&s' },
    { name: 'Veg Biryani', price: '₹272', category: 'Biryani', imgSrc: 'https://www.terrafood.co.in/cdn/shop/files/VegBiryani.jpg?v=1687766592' },
    { name: 'Panner Biryani', price: '₹300', category: 'Biryani', imgSrc: 'https://herbivorecucina.com/wp-content/uploads/2021/09/Easy-Paneer-Vegetable-Biryani-00001.jpg' },
    { name: 'Black Coffee', price: '₹120', category: 'Beverages', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzYk3ty7i28xlAEWE1hXMPuOFE3YwoIl7_A&s' },
    { name: 'vegetable salad', price: '₹190', category: 'Salads', imgSrc: 'https://www.averiecooks.com/wp-content/uploads/2016/06/12superfoodssalad-9.jpg' },
    { name: 'Filter coffee', price: '₹120', category: 'Beverages', imgSrc: 'https://kj1bcdn.b-cdn.net/media/96328/flat-white-coffee.jpg' },
    { name: 'Mix starters', price: '₹500', category: 'Starters', imgSrc: 'https://i.ytimg.com/vi/-eGHMvKx6BM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADYqfTS-9RC-P6T7FeUtLviOKt5g' },
    { name: 'Desi Tea', price: '₹120', category: 'Beverages', imgSrc: 'https://cafebarista.ca/cdn/shop/articles/comment-faire-un-aerocano-en-5-etapes-786849.jpg?v=1737725047' },
    { name: 'Chat', price: '₹120', category: 'Fast Food', imgSrc: 'https://gran.luchito.com/wp-content/uploads/2023/07/Landscape-Hero-Tacos-al-Carbon-660x500.jpg' },
    { name: 'Cold coffee', price: '₹190', category: 'Beverages', imgSrc: 'https://static.vecteezy.com/system/resources/previews/027/178/646/non_2x/ice-coffee-in-a-tall-glass-with-cream-cold-summer-drink-coffee-and-working-with-laptop-on-wooden-table-at-cafe-generative-ai-illustration-free-photo.jpg' },
    { name: 'Coffee lacto', price: '₹120', category: 'Beverages', imgSrc: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGt2pZJ5vrA96aKlP9058YB_qhopX64Kjswc4cLuxkUOHZaHGxeOUPSGFcH9bTA_fgU4bOWkVkL495XzWSFJDJqkEPJB9di8Yui2TPOy_TNN3U1lshEUBSRS2_1tfV8wFRz3CGeUpb8z4/s1600/editted2.jpg' },
    { name: 'cappuccino', price: '₹160', category: 'Beverages', imgSrc: 'https://twochimpscoffee.com/wp-content/uploads/2023/01/coffee-2799161_1920-14.jpg' },
    { name: 'Mix-Thali', price: '₹1200', category: 'Thali', imgSrc: 'https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Small Thali', price: '₹600', category: 'Thali', imgSrc: 'https://images.pexels.com/photos/31387554/pexels-photo-31387554/free-photo-of-delicious-brunch-spread-with-eggs-benedict.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Panner Salad', price: '₹169', category: 'Salads', imgSrc: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'North-Thali', price: '₹600', category: 'Thali', imgSrc: 'https://images.pexels.com/photos/31387562/pexels-photo-31387562/free-photo-of-gourmet-tapas-spread-on-marble-table-top.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Non-veg Thali', price: '₹1200', category: 'Thali', imgSrc: 'https://images.pexels.com/photos/31387548/pexels-photo-31387548/free-photo-of-delicious-steak-dinner-with-roasted-potatoes.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Cheese Pizza', price: '₹400', category: 'Fast Food', imgSrc: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg' },
    { name: 'Cone Icecream', price: '₹120', category: 'Desserts', imgSrc: 'https://icecreamtrucks.ca/wp-content/uploads/2023/04/icecream--300x200.jpg' },
    { name: 'Kichadi', price: '₹120', category: 'Main Course', imgSrc: 'https://images.pexels.com/photos/31423007/pexels-photo-31423007/free-photo-of-fried-rice-with-egg-at-casual-outdoor-dining.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'French Fries', price: '₹120', category: 'Fast Food', imgSrc: 'https://images.pexels.com/photos/30270643/pexels-photo-30270643/free-photo-of-close-up-of-crispy-french-fries-in-a-bowl.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Burger', price: '₹180', category: 'Fast Food', imgSrc: 'https://images.pexels.com/photos/8879358/pexels-photo-8879358.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Mutton biryani', price: '₹700', category: 'Biryani', imgSrc: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg' },
    { name: 'Paneer starter', price: '₹260', category: 'Starters', imgSrc: 'https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg' },
    { name: 'Tandoori Paneer ', price: '₹290', category: 'Starters', imgSrc: 'https://i0.wp.com/spicediary.com/wp-content/uploads/2020/04/20200414_195733-3-scaled.jpg?fit=780%2C933' },
    { name: 'Tandoori Chicken ', price: '₹300', category: 'Starters', imgSrc: 'https://i.ytimg.com/vi/o-Vqe1RH0oc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDBtNxYOgJp5CKzwjNk1uLzjqT0YA' },
    { name: 'Coke ', price: '₹30', category: 'Beverages', imgSrc: 'https://cdn.uengage.io/uploads/18085/image-179182-1711711756.jpeg' },
  ];

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="mt-[100px] px-5 py-10 bg-orange-200 text-center min-h-screen">
      <h1 className="text-5xl font-bold mb-8 ">
        Taj Menu
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-20">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-4xl font-semibold px-4 py-2 border rounded transition-all duration-300 
              ${selectedCategory === category
                ? 'bg-gray-800  text-white border-gray-800'
                : 'bg-white text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white'}
            `}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg bg-orange-200 transform hover:scale-105 transition-transform duration-300"
          >
            <img src={item.imgSrc} alt={item.name} className="w-full h-64 object-cover" />
            <div className="bg-black bg-opacity-60 text-white p-4 text-xl">
              <p className="text-3xl font-semibold">{item.name}</p>
              <p className="font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

import React from 'react';

const Matter = () => {
  return (
    <div className="mt-[9%]">
      {/* Parallax Background Section */}
      <div
        className="bg-fixed bg-center bg-cover bg-no-repeat px-6 py-10 text-justify"
        style={{
          backgroundImage:
            'url(https://www.sheknowsgrub.com/wp-content/uploads/2017/02/FullSizeRender-1.jpg)',
        }}
      >
        <div className="bg-green-100 bg-opacity-90 p-10 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center bg-wheat mx-auto w-1/2 py-2 font-semibold rounded-md">
            About Us
          </h2>

          <p className="text-[30px] md:text-[35px] leading-relaxed w-4/5 mx-auto my-6">
            TaJ Built in 1903, the Taj Mahal Palace is Mumbai’s first harbor landmark,
            the site of the first licensed bar in the city (the Harbour Bar, which still stands) and
            the first hotel in India to have steam elevators.
            <br /><br />
            The Taj is renowned across the world for its vast elegance, impeccable service and sheer
            magnitude: It has 560 rooms, 44 suites and 1,500 staff, including 35 butlers.
            <br /><br />
            Despite being the site of a deadly terrorist attack in 2008, the hotel remains popular
            among tourists and celebrities alike: President Barack Obama reportedly rented out the
            entire property during his 2010 visit.
            <br/><br/>
            Embark on a journey of exquisite experiences for the discerning connoisseur, 
            seamlessly woven together with impeccable service, sophisticated ambience and masterful 
            culinary artistry.</p>

          <h1 className="text-center font-bold text-4xl animate-fade">Taj</h1>
        </div>
      </div>
    </div>
  );
};

export default Matter;

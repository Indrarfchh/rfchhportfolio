import React from 'react';
import aboutImage from '../assests/aboutImage.jpg'; 

const About = () => {
  return (
    <div id="about" className="flex flex-col lg:flex-row h-auto lg:h-screen bg-gray-700 pt-20 items-center justify-center">
      <div className="w-full lg:w-2/3 flex items-center justify-center px-4 lg:pr-4 mb-8 lg:mb-0">
        <img
          src={aboutImage}
          alt="About Us"
          className="w-full h-auto object-cover rounded-2xl"
          style={{ maxWidth: '55vw', height: 'auto' }}
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 lg:pl-4">
        <div className="bg-gray-200 p-6 lg:p-10 rounded-lg shadow-2xl w-full lg:max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About</h2>
          <p className="text-base lg:text-lg">
            RFCHH Software is the best IT solutions company in Hyderabad, dedicated to driving business growth through IT services. Our experts have been carefully selected for their expertise and commitment to innovation and excellence. From development to optimization, we offer end-to-end solutions to deliver high ROI and growth in line with emerging business trends. With a global mindset, we aim to be the driving force behind global business by creating success stories through revolutionary IT services. Choose RFCHH Software for unique technology solutions that define the future of your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

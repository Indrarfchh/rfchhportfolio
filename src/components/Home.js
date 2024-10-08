import React from 'react';
import companyImage from '../assests/companyimage.jpg';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div id="home" className="flex flex-col flex-wrap md:flex-col  lg:flex-row items-center justify-between p-8 h-screen bg-gray-700 pt-20 text-white ">
      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-9xl font-bold animate-fade-in">RFCHH</h1>
        <p className="text-4xl mt-4 animate-fade-in">Software Pvt Limited</p>
        <div className="mt-8 text-3xl"> 
          <Typewriter
            options={{
              strings: ['Innovating the Future', 'Building Solutions', 'Empowering Businesses'],
              autoStart: true,
              loop: true,
              delay: 60,
              cursor: '|',
            }}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={companyImage} alt="Company" className=" rounded-2xl w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default Home;

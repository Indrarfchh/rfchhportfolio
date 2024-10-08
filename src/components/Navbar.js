import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://static.wixstatic.com/media/11f93b_a4bc239aa52742dcba2aea4b836c9c8c~mv2.jpg/v1/fill/w_113,h_105,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/_edited.jpg" 
            alt="Company Logo"
            className="w-12 h-12 object-contain"
          />
          <div className="text-lg font-bold">RFCHH</div>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="hover:text-yellow-300">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-300">About Us</a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-300">Services</a>
          </li>
          <li>
            <a href="#leadteam" className="hover:text-yellow-300">Lead Team</a>
          </li>
          <li>
            <a href="#ourteam" className="hover:text-yellow-300">Technical Team</a>
          </li>
          {/* <li>
            <a href="#contactus" className="hover:text-yellow-300">Contact Us</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

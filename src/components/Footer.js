import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div>
          <h2 className="text-orange-400 font-bold text-xl mb-2">Business Details</h2>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <p>+91 9618859003</p>
          <a href="mailto:rfchhsoftwarehr@gmail.com" className="text-yellow-300 hover:underline">
            rfchhsoftwarehr@gmail.com
          </a>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Address</h3>
          <p>RFCHH SOFTWARE PVT LTD</p>
          <p>2-1-46, near govt high school,</p>
          <p>Mamatha Nagar Colony, Nagole,</p>
          <p>Hyderabad, Telangana 500068</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Overview</h3>
          <a href="/#home" className="text-yellow-300 hover:underline block">Home</a>
          <a href="/#about" className="text-yellow-300 hover:underline block">About us</a>
          <a href="/#services" className="text-yellow-300 hover:underline block">Services</a>
          <a href="/#leadteam" className="text-yellow-300 hover:underline block">LeadTeam</a>
          <a href="/#ourteam" className="text-yellow-300 hover:underline block">Technical Team</a>


        </div>
        <div className="col-span-full md:col-span-3 lg:col-span-1">
          <h3 className="text-white font-semibold mb-2">Social</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.linkedin.com/company/rfchh-software-pvtltd/" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://www.instagram.com/rfchh_software_official/" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://x.com/rfchhsoftware" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://www.facebook.com/people/RFCHH-Software-Pvt-Ltd/61564830758500/" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=919618859004&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

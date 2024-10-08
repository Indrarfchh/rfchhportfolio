
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import OurTeam from './components/OurTeam';
import LeadTeam from './components/LeadTeam';
// import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <LeadTeam/>
      <OurTeam />
      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
}

export default App;

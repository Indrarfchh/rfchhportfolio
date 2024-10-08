import React from 'react';

const ServiceCard = ({ title, description, imageSrc, className }) => {
  return (
    <div className={`p-3 md:p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-gray-500/50 border border-gray-300 ${className}`}>
      <img src={imageSrc} alt={title} className="w-16 h-16 mb-3" />
      <div>
        <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div id="services" className="flex flex-col justify-center items-center p-8 bg-gray-700 pt-20 min-h-screen">
      <div className="text-center mb-8 w-full">
        <h2 className="text-3xl lg:text-4xl font-bold text-white">Our Services</h2>
      </div>

      <div className="w-full flex flex-col lg:flex-row lg:items-stretch lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col space-y-4 mb-8 lg:mb-0 lg:pr-4">
          <ServiceCard
            title="Vision"
            description="Together With Our Global Learning Community And A Thriving Social Ecosystem, We Use Content Techniques To Raise The Discourse And Present Our Clients To A Buying Audience That Is Relevant And In Demand."
            imageSrc="https://static.wixstatic.com/media/11f93b_b0b1a9ee5fb848698ade709a63ba7ea3~mv2.jpg/v1/fill/w_101,h_104,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20(67)_edited.jpg"
            className="flex-1 bg-gray-200"
          />
          <ServiceCard
            title="Mission"
            description="To Advance Thinking On The Future Of Work, And Grow The Human Connection Through Education, Leadership, Inspiration, And Sharing Of Timely Information."
            imageSrc="https://static.wixstatic.com/media/11f93b_2e8a4c396c9041a6925fd5fa7a94b5a1~mv2.png/v1/fill/w_101,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20(68).png"
            className="flex-1 bg-gray-200"
          />
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ServiceCard title="Software Solutions" description="We provide top-notch software solutions..." imageSrc="https://static.wixstatic.com/media/11f93b_d3617d2ffce6410eae6ad24a0c4af1fe~mv2.png/v1/crop/x_0,y_9,w_1080,h_1063/fill/w_74,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20(63).png" className="h-40 bg-gray-300" />
          <ServiceCard title="Software Services" description="Our services include..." imageSrc="https://static.wixstatic.com/media/11f93b_86ef176d53d341ba8708e0c6435ada5c~mv2.png/v1/fill/w_74,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7.png" className="h-40 bg-gray-300" />
          <ServiceCard title="Web Designs" description="Creative web design services..." imageSrc="https://static.wixstatic.com/media/11f93b_382f0e8ba75b445e997d2c65bf3410db~mv2.png/v1/fill/w_74,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8.png" className="h-40 bg-gray-300" />
          <ServiceCard title="HRMS Applications" description="Human Resource Management System solutions..." imageSrc="https://static.wixstatic.com/media/11f93b_51eb810c7002487a807c0225d1942a8a~mv2.png/v1/fill/w_74,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9.png" className="h-40 bg-gray-300" />
          <ServiceCard title="Digital Marketing" description="Comprehensive digital marketing services..." imageSrc="https://static.wixstatic.com/media/11f93b_6a9a6f6748fa45f4a3f6575f2870bd96~mv2.png/v1/fill/w_74,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/10.png" className="h-40 bg-gray-300" />
          <ServiceCard title="Corporate Training" description="Professional corporate training..." imageSrc="https://static.wixstatic.com/media/11f93b_6cb7f3f1899f4a54b30755cd30042c2e~mv2.png/v1/fill/w_74,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11.png" className="h-40 bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Services;

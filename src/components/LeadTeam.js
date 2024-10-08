import React, { useState } from 'react';
import directorImage from '../assests/directorImage.jpg'; 

const CardGrid = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  const cards = [
    { 
      id: 1, 
      title: 'Director', 
      description: 'This is the description for card 1.', 
      image: directorImage,
      name: 'SatyaNarayana Mankala'
    },
    { 
      id: 2, 
      title: 'CEO', 
      description: 'This is the description for card 2.', 
      image: 'https://static.wixstatic.com/media/11f93b_8dd1e376e7ee49b8ba900ddfb8578e94~mv2.png/v1/fill/w_436,h_361,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/18.png',
      name: 'Srikanth Puduru'
    },
    { 
      id: 3, 
      title: 'President', 
      description: 'This is the description for card 3.', 
      image: 'https://static.wixstatic.com/media/11f93b_35c333db543c4be2ba4ab3fb261d8496~mv2.png/v1/fill/w_436,h_361,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/19.png',
      name: 'Madhuri Polthala'
    },
    { 
      id: 4, 
      title: 'Vice-President', 
      description: 'This is the description for card 4.', 
      image: 'https://static.wixstatic.com/media/11f93b_dd79906e4b5e46af9d8597332a0c5bf1~mv2.png/v1/fill/w_436,h_361,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/17.png',
      name: 'Shravan Gaddam'
    },
  ];

  const selectedCardData = cards.find(card => card.id === selectedCard);

  return (
    <div id="leadteam" className="h-screen bg-gray-700 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-8xl font-bold text-white">Lead Team</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {cards.map(card => (
          <div
            key={card.id}
            className="relative w-full h-64 sm:w-80 sm:h-80 bg-gray-200 rounded-lg shadow-lg cursor-pointer overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100 hover:animate-glow"
            onClick={() => handleCardClick(card.id)}
          >
            <div className="absolute inset-0 border-4 border-transparent rounded-lg pointer-events-none transition-all duration-300 transform hover:border-yellow-500"></div>
            <div className="flex items-center justify-center h-full text-3xl font-semibold group">
              <span className="text-gray-800 group-hover:animate-typing">{card.title}</span>
            </div> 
          </div>
        ))}
      </div>

      {selectedCardData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={handleClosePopup}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs sm:max-w-sm w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <img src={selectedCardData.image} alt={selectedCardData.title} className="w-full h-72 object-cover mb-4 rounded-lg border-2 border-gray-300 shadow-md" />
            <div className="text-center mb-4">
              <p className="text-lg font-medium text-gray-700">{selectedCardData.name}</p>
            </div>
            <h2 className="text-xl font-bold mb-2 text-center text-gray-800">{selectedCardData.title}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardGrid;

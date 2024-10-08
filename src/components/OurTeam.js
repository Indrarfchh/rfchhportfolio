import React, { useState } from 'react';

const teamData = {
  "Frontend Team": [ 
    "Vijay Saradhi",
    "Anil Kumar",
    "Lakshman",
    "Aravind",
    "Sanath",
    "Chandra Kiran",
    "Sai Kumar",
    "Suraj",
    "Roshini",
    "Indrakanth",
    "Vikram"
  ],
  "Backend Team": [ 
    "Hemanth",
    "Bharath",
    "Bhargav",
    "Anil",
    "Anjali",
    "Apoorva",
    "Venkatarathnam",
    "Sravani"
  ],
  "Testing Team": [ 
    "Nikitha",
    "Deekshith",
    "Kavya Rani",
    "Sai Alekhya"
  ],
  "Marketing Team": [ 
    "Lokesh",
    "Prasanth",
    "Shiva"
  ],
  "Data Analytics Team": [ "Vasu" ],
  "Business Analytics Team": ["Naveen Sharma"],
};

const TeamCard = ({ title, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer bg-gray-300 rounded-lg shadow-lg flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-2xl"
    style={{ width: '400px', height: '220px' }} 
  >
    <h3 className="text-xl font-bold text-black">{title}</h3>
  </div>
);

const TeamModal = ({ team, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
    <div className="bg-white p-8 rounded-lg max-w-md w-full" onClick={(e) => e.stopPropagation()}>
      <h2 className="text-2xl font-bold mb-4 text-center">{team}</h2>
      <ul className="list-disc text-first">
        {teamData[team].map((member, index) => (
          <li key={index} className="text-blue-500 cursor-pointer" onClick={() => window.location.href = 'https://example.com'}>
            {member}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const OurTeam = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  return (
    <div id="ourteam" className="p-8 bg-gray-700 pt-20 h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-white mb-14">Technical Team</h1> {/* Heading */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(teamData).map((team) => (
          <TeamCard key={team} title={team} onClick={() => setSelectedTeam(team)} />
        ))}
      </div>
      {selectedTeam && <TeamModal team={selectedTeam} onClose={() => setSelectedTeam(null)} />}
    </div>
  );
};

export default OurTeam;

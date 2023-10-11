import React from 'react';
import './Campaigns.css'; 
import CampaignCard from '../../components/CampaignCard/CampaignCard'; 

import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

const campaignsData = [
  {
    id: 1,
    title: 'Clean Water Initiative',
    description: 'Cleaning nearby Waterbodies.',
    goal: 'RUPEES :- 10,000',
    raised: 'RUPEES :- 7,500'
  },
  {
    id: 2,
    title: 'Education for All',
    description: 'Support education programs at Slums .',
    goal: 'RUPEES :- 15,000',
    raised: 'RUPEES :- 12,200'
  },
  {
    id: 2,
    title: 'Animal Care',
    description: 'Support Street Animals for hunger.',
    goal: 'RUPEES :- 19,000',
    raised: 'RUPEES :- 1,800'
  },
  {
    id: 1,
    title: 'Clean Water Initiative',
    description: 'Cleaning nearby Waterbodies.',
    goal: 'RUPEES :- 10,000',
    raised: 'RUPEES :- 7,500'
  },
  {
    id: 2,
    title: 'Education for All',
    description: 'Support education programs at Slums .',
    goal: 'RUPEES :- 15,000',
    raised: 'RUPEES :- 12,200'
  },
  {
    id: 2,
    title: 'Animal Care',
    description: 'Support Street Animals for hunger.',
    goal: 'RUPEES :- 19,000',
    raised: 'RUPEES :- 1,800'
  },
  
];

function Campaigns() {
  return (
    <div className="campaigns-page">
      <Navbar />
      <div className="campaigns-container">
        <h1 className='heading'>Explore Campaigns</h1>
        <div className="campaigns-list">
          {campaignsData.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Campaigns;

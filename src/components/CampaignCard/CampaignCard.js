import React from 'react';
import './CampaignCard.css'; 

const CampaignCard = ({ campaign }) => {
  return (
    <div className="campaign-card">
      <h2>{campaign.title}</h2>
      <p>{campaign.description}</p>
      <div className="campaign-details">
        <p><strong>Goal:</strong> {campaign.goal}</p>
        <p><strong>Raised:</strong> {campaign.raised}</p>
      </div>
      <button>Donate Now</button>
    </div>
  );
};

export default CampaignCard;
import React from 'react';
import './Team.css'; // Ensure the styles are imported

const Team = () => {
  return (
    <div className="team">
      <div className="card-container">
        <div className="card">
          <div className="front-content">
            <p>TEAM RADIONITROZ</p>
          </div>
          <div className="content">
            <div className='img'>
          <img src="/team .jpg" alt="Team 1" className="team-img" />
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
/*
         <img src="/team .jpg" alt="Team 1" className="team-img" />
         <img src="/team .jpg" alt="Team 1" className="team-img" />
         <img src="/team .jpg" alt="Team 1" className="team-img" />
         <img src="/team .jpg" alt="Team 1" className="team-img" />*/
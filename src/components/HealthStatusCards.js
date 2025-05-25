import React from 'react';
import { healthData } from '../data/healthData';

const HealthStatusCards = () => (
  <div className="health-status-cards">
    {healthData.map(item => (
      <div key={item.id} className="health-card">
        <div className="health-card-header">
          <item.icon size={24} style={{ color: item.color }} />
          <h4>{item.name}</h4>
        </div>
        <p className="health-date">{item.date}</p>
        <div className={`status-bar ${item.status}`}>
          <div className="status-fill"></div>
        </div>
      </div>
    ))}
  </div>
);

export default HealthStatusCards;
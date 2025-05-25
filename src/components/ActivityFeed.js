import React from 'react';

const ActivityFeed = () => (
  <div className="activity-section">
    <h3>Activity</h3>
    <p className="activity-summary">3 appointments on this week</p>
    <div className="activity-chart">
      <div className="chart-bars">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <div key={day} className="bar-container">
            <div className="bar" style={{ height: `${Math.random() * 80 + 20}%` }}></div>
            <span className="bar-label">{day}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ActivityFeed;
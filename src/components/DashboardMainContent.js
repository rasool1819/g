import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import '../styles/Dashboard.css';

const DashboardMainContent = () => (
  <main className="dashboard-main">
    <div className="dashboard-header">
      <h2>Dashboard</h2>
      <span className="week-indicator">This Week</span>
    </div>
    <div className="dashboard-grid">
      <div className="left-section">
        <AnatomySection />
        <HealthStatusCards />
      </div>
      <div className="center-section">
        <CalendarView />
      </div>
      <div className="right-section">
        <UpcomingSchedule />
        <ActivityFeed />
      </div>
    </div>
  </main>
);

export default DashboardMainContent;
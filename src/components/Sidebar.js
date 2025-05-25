import React from 'react';
import { navigationGeneralItems, navigationToolItems, settingsItem } from '../data/navigationData';
import '../styles/Sidebar.css';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-content">
      <div className="sidebar-section">
        <h3 className="sidebar-title">General</h3>
        <nav className="sidebar-nav">
          {navigationGeneralItems.map((item, index) => (
            <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
              <item.icon size={20} />
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
      <div className="sidebar-section">
        <h3 className="sidebar-title">Tools</h3>
        <nav className="sidebar-nav">
          {navigationToolItems.map((item, index) => (
            <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
              <item.icon size={20} />
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
      <div className="settings-section">
        <nav className="sidebar-nav">
          {settingsItem.map((item, index) => (
            <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
              <item.icon size={20} />
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </div>
  </aside>
);

export default Sidebar;
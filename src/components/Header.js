import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <div className="header-left">
      <h1 className="logo">Health<span>care.</span></h1>
    </div>
    <div className="header-center">
      <div className="search-bar">
        <Search size={20} className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
    </div>
    <div className="header-right">
      <Bell size={20} className="notification-icon" />
      <div className="user-profile">
        <img src="/user-profile.png" alt="User" className="avatar" />
      </div>
      <button className="add-btn">
        <Plus size={20} />
      </button>
    </div>
  </header>
);

export default Header;
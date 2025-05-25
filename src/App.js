import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import './styles/App.css';

const App = () => (
  <div className="app">
    <Header />
    <div className="app-body">
      <Sidebar />
      <DashboardMainContent />
    </div>
  </div>
);

export default App;
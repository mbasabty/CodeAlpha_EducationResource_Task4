import React from 'react';
import MetricsCards from './MetricsCards';

const Header = ({ insights }) => {
  return (
    <header className="dashboard-header">
      <div className="header-content">
        <div>
          <h1>Educational Analytics Hub</h1>
          <p>Student Performance & Resource Optimization Dashboard</p>
        </div>
        <div className="header-icon">📊</div>
      </div>
      <MetricsCards insights={insights} />
    </header>
  );
};

export default Header;
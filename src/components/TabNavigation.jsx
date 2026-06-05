import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'overview', label: 'Performance Overview', icon: '📈' },
    { id: 'resources', label: 'Resource Analysis', icon: '🔍' },
    { id: 'staffing', label: 'Staffing & Ratio', icon: '👥' },
    { id: 'recommendations', label: 'Insights & Actions', icon: '💡' }
  ];

  return (
    <nav className="tab-navigation">
      <div className="tab-container">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default TabNavigation;
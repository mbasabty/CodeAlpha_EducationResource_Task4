import React, { useState } from 'react';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import PerformanceChart from './components/PerformanceChart';
import ResourceChart from './components/ResourceChart';
import {
  performanceData,
  resourceData,
  performanceDistribution,
  insightCards
} from './data/sampleData';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div>
            <div className="grid-2">
              <PerformanceChart data={performanceData} />
              {/* Add PerformanceDistributionChart here */}
            </div>
          </div>
        );
      case 'resources':
        return (
          <div className="grid-2">
            <ResourceChart data={resourceData} />
            {/* Add Gap Analysis Chart here */}
          </div>
        );
      case 'staffing':
        return (
          <div>
            <p>Staffing content will go here</p>
          </div>
        );
      case 'recommendations':
        return (
          <div>
            <p>Recommendations content will go here</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header insights={insightCards} />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        {renderTabContent()}
      </main>
    </div>
  );
}

export default App;
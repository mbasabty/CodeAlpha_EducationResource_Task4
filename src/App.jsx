import React, { useState } from 'react';
import Header from './components/Header.jsx';
import TabNavigation from './components/TabNavigation.jsx';
import PerformanceChart from './components/PerformanceChart.jsx';
import PerformanceDistributionChart from './components/PerformanceDistributionChart.jsx';
import ResourceChart from './components/ResourceChart.jsx';
import GapAnalysisChart from './components/GapAnalysisChart.jsx';

import {
  performanceData,
  resourceData,
  performanceDistribution,
  gapAnalysisData,
  insightCards
} from './data/sampleData';

import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="grid-2">
            <PerformanceChart data={performanceData} />
            <PerformanceDistributionChart
              data={performanceDistribution}
            />
          </div>
        );

      case 'resources':
        return (
          <div className="grid-2">
            <ResourceChart data={resourceData} />
            <GapAnalysisChart data={gapAnalysisData} />
          </div>
        );

      case 'staffing':
        return (
          <div className="card">
            <h2>Staffing Analysis</h2>
            <p>Staffing content will go here.</p>
          </div>
        );

      case 'recommendations':
        return (
          <div className="card">
            <h2>Recommendations</h2>
            <p>Recommendations content will go here.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header insights={insightCards} />
      <TabNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="main-content">
        {renderTabContent()}
      </main>
    </div>
  );
}

export default App;
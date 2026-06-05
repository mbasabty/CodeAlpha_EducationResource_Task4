import React from 'react';

const MetricsCards = ({ insights }) => {
  return (
    <div className="metrics-grid">
      {insights.map((insight, idx) => (
        <div key={idx} className="metric-card">
          <p className="metric-title">{insight.title}</p>
          <div className="metric-value-container">
            <span className="metric-value">{insight.value}</span>
            <span className={`metric-trend trend-${insight.trend}`}>
              {insight.trend === 'up' ? '↑' : insight.trend === 'down' ? '↓' : '→'}
            </span>
          </div>
          <p className="metric-detail">{insight.detail}</p>
        </div>
      ))}
    </div>
  );
};

export default MetricsCards;
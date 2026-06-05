import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const PerformanceChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h2>Academic Performance Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0f2fe" />
          <XAxis dataKey="month" stroke="#0e7490" />
          <YAxis stroke="#0e7490" domain={[60, 85]} />
          <Tooltip 
            contentStyle={{ 
              background: '#f0fdfa', 
              border: '1px solid #06b6d4', 
              borderRadius: '8px' 
            }} 
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="mathScore" 
            stroke="#06b6d4" 
            strokeWidth={2} 
            dot={{ r: 4 }} 
            name="Math" 
          />
          <Line 
            type="monotone" 
            dataKey="scienceScore" 
            stroke="#0891b2" 
            strokeWidth={2} 
            dot={{ r: 4 }} 
            name="Science" 
          />
          <Line 
            type="monotone" 
            dataKey="englishScore" 
            stroke="#0e7490" 
            strokeWidth={2} 
            dot={{ r: 4 }} 
            name="English" 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
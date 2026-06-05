import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const ResourceChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h2>Allocated vs Utilized Resources</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0f2fe" />
          <XAxis dataKey="dept" stroke="#0e7490" />
          <YAxis stroke="#0e7490" />
          <Tooltip 
            contentStyle={{ 
              background: '#f0fdfa', 
              border: '1px solid #06b6d4', 
              borderRadius: '8px' 
            }} 
          />
          <Legend />
          <Bar 
            dataKey="allocated" 
            fill="#0891b2" 
            radius={[8, 8, 0, 0]} 
            name="Allocated %" 
          />
          <Bar 
            dataKey="utilized" 
            fill="#06b6d4" 
            radius={[8, 8, 0, 0]} 
            name="Utilized %" 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResourceChart;
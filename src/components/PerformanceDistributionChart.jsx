import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts';

const performanceDistribution = [
  { range: 'Excellent (90+)', count: 45, percentage: 18 },
  { range: 'Good (80-89)', count: 92, percentage: 37 },
  { range: 'Satisfactory (70-79)', count: 78, percentage: 32 },
  { range: 'Needs Improvement (60-69)', count: 28, percentage: 11 },
  { range: 'Below Target (<60)', count: 7, percentage: 2 }
];

const COLORS = [
  '#22c55e',
  '#3b82f6',
  '#f59e0b',
  '#ef4444',
  '#7f1d1d',
];

function PerformanceDistributionChart() {
  return (
    <div className="chart-card">
      <h3>Performance Distribution</h3>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={performanceDistribution}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 50, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis
            dataKey="range"
            type="category"
            width={140}
          />
          <Tooltip
            formatter={(value, name) => [
              value,
              name === 'count' ? 'Employees' : 'Percentage'
            ]}
          />

          <Bar dataKey="count" radius={[0, 8, 8, 0]}>
            {performanceDistribution.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceDistributionChart;
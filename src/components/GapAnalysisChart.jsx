import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const gapAnalysisData = [
  { department: 'Engineering', required: 20, available: 15, gap: 5 },
  { department: 'Design', required: 10, available: 8, gap: 2 },
  { department: 'QA', required: 12, available: 9, gap: 3 },
  { department: 'Product', required: 14, available: 10, gap: 4 },
  { department: 'DevOps', required: 8, available: 6, gap: 2 },
  { department: 'Data Science', required: 15, available: 11, gap: 4 },
  { department: 'Support', required: 18, available: 16, gap: 2 },
  { department: 'HR', required: 6, available: 5, gap: 1 }
];

function GapAnalysisChart() {
  const totalGap = gapAnalysisData.reduce(
    (sum, item) => sum + item.gap,
    0
  );

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>Gap Analysis</h3>
        <span>Total Resource Gap: {totalGap}</span>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={gapAnalysisData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar
            dataKey="required"
            name="Required"
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
          />

          <Bar
            dataKey="available"
            name="Available"
            fill="#22c55e"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GapAnalysisChart;
// Sample data for the dashboard
export const performanceData = [
  { month: 'Aug', mathScore: 72, scienceScore: 68, englishScore: 75, averageScore: 71.7 },
  { month: 'Sep', mathScore: 74, scienceScore: 70, englishScore: 77, averageScore: 73.7 },
  { month: 'Oct', mathScore: 76, scienceScore: 73, englishScore: 79, averageScore: 76 },
  { month: 'Nov', mathScore: 78, scienceScore: 75, englishScore: 81, averageScore: 78 },
  { month: 'Dec', mathScore: 79, scienceScore: 77, englishScore: 82, averageScore: 79.3 },
  { month: 'Jan', mathScore: 81, scienceScore: 79, englishScore: 84, averageScore: 81.3 }
];

export const resourceData = [
  { dept: 'STEM', allocated: 45, utilized: 38, gap: 7 },
  { dept: 'Language Arts', allocated: 30, utilized: 28, gap: 2 },
  { dept: 'Social Studies', allocated: 15, utilized: 12, gap: 3 },
  { dept: 'Arts & Music', allocated: 10, utilized: 7, gap: 3 }
];

export const performanceDistribution = [
  { range: 'Excellent (90+)', count: 45, percentage: 18 },
  { range: 'Good (80-89)', count: 92, percentage: 37 },
  { range: 'Satisfactory (70-79)', count: 78, percentage: 32 },
  { range: 'Needs Improvement (60-69)', count: 28, percentage: 11 },
  { range: 'Below Target (<60)', count: 7, percentage: 2 }
];

export const staffingData = [
  { name: 'Optimal', students: 25, value: 100 },
  { name: 'Current', students: 32, value: 78 },
  { name: 'Understaffed', students: 40, value: 62 }
];

export const insightCards = [
  { title: 'Performance Growth', value: '+9.6%', trend: 'up', detail: 'Since August' },
  { title: 'Resource Efficiency', value: '84%', trend: 'stable', detail: 'Utilization rate' },
  { title: 'Students At Risk', value: '28', trend: 'down', detail: '11.2% of total' },
  { title: 'Teacher Capacity', value: '78%', trend: 'down', detail: 'vs optimal ratio' }
];
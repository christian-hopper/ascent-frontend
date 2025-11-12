const TODAYS_HABITS = [
  {
    id: 1,
    name: "Morning Meditation",
    category: "Health & Fitness",
    target: "10 minutes",
    streak: 3,
    completed: true,
  },
  {
    id: 2,
    name: "Reading",
    category: "Learning",
    target: "20 pages",
    streak: 5,
    completed: true,
  },
  {
    id: 3,
    name: "Exercise",
    category: "Health & Fitness",
    target: "1 hour",
    streak: 2,
    completed: false,
  },
  {
    id: 4,
    name: "Drink Water",
    category: "Health & Fitness",
    target: "8 glasses",
    streak: 7,
    completed: true,
  },
  {
    id: 5,
    name: "Daily Journal",
    category: "Creativity",
    target: "15 minutes",
    streak: 4,
    completed: false,
  },
  {
    id: 6,
    name: "Homework",
    category: "Productivity",
    target: "2 hours",
    streak: 1,
    completed: false,
  },
];

const HOME_STATS = [
  { title: "Current Streak", shortTitle: "Streak", value: "12 Days" },
  { title: "This Week", shortTitle: "This Week", value: "21 habits" },
  { title: "Total Completed", shortTitle: "Total", value: "156" },
];

const JOURNAL_PROMPTS = [
  "What are you grateful for today?",
  "What's one thing that went well?",
  "What did you learn today?",
  "How did you grow today?",
];

const INSIGHTS_STATS = [
  { title: "Current Streak", value: "12 days" },
  { title: "This Month", value: "137 tasks" },
  { title: "Avg. Score", value: "73%" },
  { title: "Active Days", value: "89" },
];

const MOODS = [
  {
    emoji: "😊",
    label: "Happy",
    color: "from-yellow-500/20 to-orange-500/20 border-yellow-500/30",
  },
  {
    emoji: "😌",
    label: "Calm",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  },
  {
    emoji: "😔",
    label: "Sad",
    color: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30",
  },
  {
    emoji: "😤",
    label: "Motivated",
    color: "from-red-500/20 to-orange-500/20 border-red-500/30",
  },
  {
    emoji: "😰",
    label: "Anxious",
    color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  },
];

const MOOD_DATA = [
  { name: "Happy", value: 35, color: "#fbbf24" },
  { name: "Calm", value: 25, color: "#06b6d4" },
  { name: "Motivated", value: 20, color: "#ef4444" },
  { name: "Anxious", value: 12, color: "#a855f7" },
  { name: "Sad", value: 8, color: "#6366f1" },
];

const WEEKLY_DATA = [
  { day: "Mon", score: 65 },
  { day: "Tue", score: 72 },
  { day: "Wed", score: 68 },
  { day: "Thu", score: 78 },
  { day: "Fri", score: 75 },
  { day: "Sat", score: 82 },
  { day: "Sun", score: 70 },
];

const MONTHLY_DATA = [
  { week: "Week 1", habits: 28 },
  { week: "Week 2", habits: 32 },
  { week: "Week 3", habits: 35 },
  { week: "Week 4", habits: 42 },
];

const ACHIEVEMENTS = [
  {
    icon: "🏆",
    title: "Week Warrior",
    desc: "Completed all habits for 7 days",
    color: "insights__achievement--yellow",
  },
  {
    icon: "🔥",
    title: "On Fire",
    desc: "Reached a 10-day streak",
    color: "insights__achievement--orange",
  },
  {
    icon: "🎯",
    title: "Consistency King",
    desc: "Logged journal entries for 15 days",
    color: "insights__achievement--blue",
  },
];

export {
  TODAYS_HABITS,
  HOME_STATS,
  JOURNAL_PROMPTS,
  INSIGHTS_STATS,
  MOODS,
  MOOD_DATA,
  WEEKLY_DATA,
  MONTHLY_DATA,
  ACHIEVEMENTS,
};

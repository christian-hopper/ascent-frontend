const todaysHabits = [
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

const homeStats = [
  { title: "Current Streak", shortTitle: "Streak", value: "12 Days" },
  { title: "This Week", shortTitle: "This Week", value: "21 habits" },
  { title: "Total Completed", shortTitle: "Total", value: "156" },
];

const journalPrompts = [
  "What are you grateful for today?",
  "What's one thing that went well?",
  "What did you learn today?",
  "How did you grow today?",
];

const moods = [
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

export { todaysHabits, homeStats, journalPrompts, moods };

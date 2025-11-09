import HabitCard from "../HabitCard/HabitCard";
import "./GoalsHabits.css";

function GoalsHabits({ habits, toggleHabit }) {
  const groupedHabits = habits.reduce((groups, habit) => {
    const category = habit.category || "Other";
    if (!groups[category]) groups[category] = [];
    groups[category].push(habit);
    return groups;
  }, {});

  return (
    <div className="goals-habits">
      {Object.entries(groupedHabits).map(([category, habits]) => (
        <div key={category} className="goals-habits__group">
          <h3 className="goals-habits__category">{category}</h3>
          <ul className="goals-habits__list">
            {habits.map((habit) => (
              <HabitCard
                key={habit.id}
                name={habit.name}
                completed={habit.completed}
                streak={habit.streak}
                target={habit.target}
                showStreakLabel={false}
                onClick={() => toggleHabit(habit.id)}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GoalsHabits;

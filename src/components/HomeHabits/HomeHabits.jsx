import HabitCard from "../HabitCard/HabitCard";
import "./HomeHabits.css";

function HomeHabits({ habits, toggleHabit, completedCount }) {
  return (
    <div className="home-habits">
      <div className="home-habits__header">
        <h3 className="home-habits__title">Today's Focus</h3>
        <span className="home-habits__count">
          {completedCount}/{habits.length} Complete
        </span>
      </div>

      <ul className="home-habits__list">
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            name={habit.name}
            completed={habit.completed}
            streak={habit.streak}
            onClick={() => toggleHabit(habit.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default HomeHabits;

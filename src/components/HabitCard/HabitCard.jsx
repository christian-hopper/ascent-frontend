import checkIcon from "../../assets/images/check-icon.svg";
import streakIcon from "../../assets/images/streak-icon.svg";
import "./HabitCard.css";

function HabitCard({
  name,
  completed,
  streak,
  target,
  showStreakLabel = true,
  onClick,
}) {
  return (
    <li
      className={`habit-card ${completed ? "habit-card--completed" : ""}`}
      onClick={onClick}
    >
      <div className="habit-card__icon">
        <div
          className={`habit-card__circle ${
            completed ? "habit-card__circle--completed" : ""
          }`}
        >
          {completed && (
            <img
              src={checkIcon}
              alt="Completed"
              className="habit-card__check"
            />
          )}
        </div>
      </div>

      <div className="habit-card__content">
        <p className={`habit-card__name ${completed ? "completed" : ""}`}>
          {name}
        </p>

        <div className="habit-card__details">
          {target && <span className="habit-card__target">{target}</span>}

          <span
            className={`habit-card__streak
              ${!showStreakLabel ? "habit-card__streak--highlight" : ""}
              ${!completed ? "habit-card__streak--inactive" : ""}
            `}
          >
            <img
              src={streakIcon}
              alt="Streak"
              className="habit-card__streak-icon"
            />
            {streak}
            {showStreakLabel && " day streak"}
          </span>
        </div>
      </div>
    </li>
  );
}

export default HabitCard;

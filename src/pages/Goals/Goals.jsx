import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import CalendarRow from "../../components/CalendarRow/CalendarRow";
import GoalsHabits from "../../components/GoalsHabits/GoalsHabits";
import AddHabitModal from "../../components/AddHabitModal/AddHabitModal";
import "./Goals.css";

function Goals({ completedCount, habits, toggleHabit, addHabit, openModal }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weekDates, setWeekDates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Generate week centered around selectedDate
  useEffect(() => {
    const generateWeek = () => {
      const week = [];
      const current = new Date(selectedDate);
      current.setDate(selectedDate.getDate() - 3);

      for (let i = 0; i < 7; i++) {
        const date = new Date(current);
        week.push({
          day: date.toLocaleDateString("en-US", { weekday: "short" }),
          date: date.getDate(),
          fullDate: new Date(date),
        });
        current.setDate(current.getDate() + 1);
      }
      setWeekDates(week);
    };

    generateWeek();
  }, [selectedDate]);

  const handlePrev = () => {
    setSelectedDate(
      (prev) =>
        new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() - 7)
    );
  };

  const handleNext = () => {
    setSelectedDate(
      (prev) =>
        new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() + 7)
    );
  };

  const handleSelect = (date) => {
    setSelectedDate(date);
  };

  const monthYear = selectedDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <main className="goals">
      <section className="goals__header">
        <div className="goals__header-top">
          <Header title="Goals" subtitle={monthYear} />
          <button
            className="goals__add-button"
            onClick={() => openModal("addHabit")}
          >
            +
          </button>
        </div>

        <CalendarRow
          weekDates={weekDates}
          selectedDate={selectedDate}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelect={handleSelect}
        />
        <div className="goals__habit-header">
          <h3 className="goals__habit-title">Daily Progress</h3>
          <span className="goals__habit-count">
            {completedCount}/{habits.length} Complete
          </span>
        </div>
      </section>

      <GoalsHabits habits={habits} toggleHabit={toggleHabit} />
    </main>
  );
}

export default Goals;

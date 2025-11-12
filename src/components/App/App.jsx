import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../../pages/Home/Home.jsx";
import Goals from "../../pages/Goals/Goals.jsx";
import Journal from "../../pages/Journal/Journal.jsx";
import Insights from "../../pages/Insights/Insights.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import BottomNav from "../BottomNav/BottomNav.jsx";
import AccountModal from "../AccountModal/AccountModal.jsx";
import AddHabitModal from "../AddHabitModal/AddHabitModal.jsx";
import { TODAYS_HABITS as defaultHabits } from "../../utils/constants";
import "./App.css";

function App() {
  const [habits, setHabits] = useState(defaultHabits);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
  };

  // Add new habit

  const addHabit = (newHabit) => {
    setHabits((prev) => [
      ...prev,
      {
        ...newHabit,
        id: Date.now(),
        completed: false,
        streak: 0,
      },
    ]);
  };

  // Toggle completion
  const toggleHabit = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  const completedCount = habits.filter((habit) => habit.completed).length;

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className={`app ${isCollapsed ? "app--collapsed" : ""}`}>
      <Navigation
        toggleCollapse={toggleCollapse}
        isCollapsed={isCollapsed}
        handleNavClick={handleNavClick}
        openModal={setActiveModal}
      />
      <BottomNav />
      <main className="app__content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                habits={habits}
                toggleHabit={toggleHabit}
                completedCount={completedCount}
                openModal={setActiveModal}
              />
            }
          />
          <Route
            path="/goals"
            element={
              <Goals
                habits={habits}
                toggleHabit={toggleHabit}
                completedCount={completedCount}
                addHabit={addHabit}
                openModal={setActiveModal}
              />
            }
          />
          <Route path="/journal" element={<Journal />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
        <AddHabitModal
          isOpen={activeModal === "addHabit"}
          onClose={closeModal}
          onSubmit={addHabit}
          categories={[
            "Health & Fitness",
            "Learning",
            "Creativity",
            "Productivity",
            "Mindfulness",
          ]}
        />

        <AccountModal isOpen={activeModal === "account"} onClose={closeModal} />
      </main>
    </div>
  );
}

export default App;

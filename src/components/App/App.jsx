import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home.jsx";
import Goals from "../../pages/Goals/Goals.jsx";
import Journal from "../../pages/Journal/Journal.jsx";
import Insights from "../../pages/Insights/Insights.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import { todaysHabits as defaultHabits } from "../../utils/constants";
import "./App.css";

function App() {
  const [habits, setHabits] = useState(defaultHabits);
  const [isCollapsed, setIsCollapsed] = useState(false);

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

  return (
    <Router>
      <div className={`app ${isCollapsed ? "app--collapsed" : ""}`}>
        <Navigation toggleCollapse={toggleCollapse} isCollapsed={isCollapsed} />
        <div className="app__content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  habits={habits}
                  toggleHabit={toggleHabit}
                  completedCount={completedCount}
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
                />
              }
            />
            <Route path="/journal" element={<Journal />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

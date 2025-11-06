import Header from "../../components/Header/Header";
import ScoreCard from "../../components/ScoreCard/ScoreCard";
import HomeStats from "../../components/HomeStats/HomeStats";
import HomeHabits from "../../components/HomeHabits/HomeHabits";
import "./Home.css";

function Home({ habits, toggleHabit }) {
  const completedCount = habits.filter((habit) => habit.completed).length;

  return (
    <div className="home">
      <Header title="Today's Focus" dateType="full" />

      <div className="home__main">
        <ScoreCard
          ascentScore={Math.round((completedCount / habits.length) * 100)}
        />
        <HomeStats />
      </div>

      <HomeHabits
        habits={habits}
        toggleHabit={toggleHabit}
        completedCount={completedCount}
      />
    </div>
  );
}

export default Home;

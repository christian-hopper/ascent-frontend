import Header from "../../components/Header/Header";
import MobileHomeHeader from "../../components/MobileHomeHeader/MobileHomeHeader";
import ScoreCard from "../../components/ScoreCard/ScoreCard";
import HomeStats from "../../components/HomeStats/HomeStats";
import HomeHabits from "../../components/HomeHabits/HomeHabits";
import "./Home.css";

function Home({ habits, toggleHabit, completedCount, openModal }) {
  return (
    <main className="home">
      <div className="home__header-desktop">
        <Header title="Welcome Back" dateType="full" />
      </div>

      <div className="home__header-mobile">
        <MobileHomeHeader openModal={openModal} />
      </div>

      <section className="home__main">
        <ScoreCard
          ascentScore={Math.round((completedCount / habits.length) * 100)}
        />
        <HomeStats />
        <HomeHabits
          habits={habits}
          toggleHabit={toggleHabit}
          completedCount={completedCount}
        />
      </section>
    </main>
  );
}

export default Home;

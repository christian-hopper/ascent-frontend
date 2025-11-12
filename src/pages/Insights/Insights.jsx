import Header from "../../components/Header/Header";
import InsightsStats from "../../components/InsightsStats/InsightsStats";
import WeeklyChart from "../../components/WeeklyChart/WeeklyChart";
import MonthlyChart from "../../components/MonthlyChart/MonthlyChart";
import MoodChart from "../../components/MoodChart/MoodChart";
import { ACHIEVEMENTS as achievements } from "../../utils/constants";
import "./Insights.css";

function Insights() {
  return (
    <div className="insights">
      <Header title="Insights" subtitle="Your growth journey" />

      {/* Stats Cards */}
      <InsightsStats />

      {/* Charts */}
      <div className="insights__charts">
        <div className="insights__chart">
          <h3 className="insights__chart-title">Weekly Ascent Score</h3>
          <WeeklyChart />
        </div>

        <div className="insights__chart">
          <h3 className="insights__chart-title">Monthly Progress</h3>
          <MonthlyChart />
        </div>
      </div>

      {/* Mood Distribution */}
      <MoodChart />

      {/* Achievements */}
      <div className="insights__achievements">
        <h3 className="insights__achievement-header">Recent Achievements</h3>
        <div className="insights__achievement-list">
          {achievements.map((item, index) => (
            <div key={index} className={`insights__achievement ${item.color}`}>
              <span className="insights__achievement-icon">{item.icon}</span>
              <div className="insights__achievement-info">
                <p className="insights__achievement-title">{item.title}</p>
                <p className="insights__achievement-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Insights;

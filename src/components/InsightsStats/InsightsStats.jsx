import streakIcon from "../../assets/images/streak-icon.svg";
import targetPurple from "../../assets/images/target-purple.svg";
import chartGreen from "../../assets/images/chart-green.svg";
import calendarBlue from "../../assets/images/calendar-blue.svg";

import { INSIGHTS_STATS } from "../../utils/constants";
import "./InsightsStats.css";

function InsightsStats() {
  const icons = [streakIcon, targetPurple, chartGreen, calendarBlue];
  const colors = ["cyan", "purple", "green", "blue"];

  return (
    <div className="insights-stats">
      {INSIGHTS_STATS.map((stat, index) => {
        const color = colors[index % colors.length];
        const icon = icons[index % icons.length];

        return (
          <div
            key={index}
            className={`insights-stats__card insights-stats__card--${color}`}
          >
            <div className="insights-stats__header">
              <img
                src={icon}
                alt={`${stat.title} icon`}
                className="insights-stats__icon"
              />
              <p className="insights-stats__label">{stat.title}</p>
            </div>
            <p className="insights-stats__value">{stat.value}</p>
          </div>
        );
      })}
    </div>
  );
}

export default InsightsStats;

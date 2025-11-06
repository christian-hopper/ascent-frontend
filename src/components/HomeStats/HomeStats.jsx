import { homeStats } from "../../utils/constants";
import "./HomeStats.css";

function HomeStats() {
  const colors = ["purple", "cyan", "blue"];

  return (
    <div className="home-stats">
      {homeStats.map((stat, index) => {
        const color = colors[index];
        return (
          <div
            key={index}
            className={`home-stats__card home-stats__card--${color}`}
          >
            <h3
              className={`home-stats__card-title home-stats__card-title--${color}`}
            >
              {stat.title}
            </h3>
            <p className="home-stats__card-value">{stat.value}</p>
          </div>
        );
      })}
    </div>
  );
}

export default HomeStats;

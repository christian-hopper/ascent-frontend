import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { MOOD_DATA as moodData } from "../../utils/constants";
import "./MoodChart.css";

function MoodChart() {
  return (
    <div className="mood-chart">
      <h3 className="mood-chart__title">Mood Distribution</h3>

      <div className="mood-chart__chart">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={moodData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {moodData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "12px",
              }}
              itemStyle={{ color: "#cad5e2" }}
              labelStyle={{ color: "#cad5e2" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mood-chart__legend">
        {moodData.map((mood) => (
          <div key={mood.name} className="mood-chart__legend-item">
            <div
              className="mood-chart__legend-color"
              style={{ backgroundColor: mood.color }}
            />
            <span className="mood-chart__legend-name">{mood.name}</span>
            <span className="mood-chart__legend-value">{mood.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoodChart;

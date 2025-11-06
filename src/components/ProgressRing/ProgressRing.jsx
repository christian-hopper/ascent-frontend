import React from "react";
import "./ProgressRing.css";

function ProgressRing({ score }) {
  const radius = 80;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="progress-ring">
      <svg
        className="progress-ring__svg"
        height={radius * 2}
        width={radius * 2}
      >
        <defs>
          <linearGradient
            id="progress-ring-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        <circle
          className="progress-ring__circle--bg"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        <circle
          className="progress-ring__circle--progress"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
        />
      </svg>

      <div className="progress-ring__center">
        <p className="progress-ring__score">{score}</p>
        <p className="progress-ring__label">Ascent Score</p>
      </div>
    </div>
  );
}

export default ProgressRing;

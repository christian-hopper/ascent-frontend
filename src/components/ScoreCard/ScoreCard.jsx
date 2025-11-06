import ProgressRing from "../ProgressRing/ProgressRing.jsx";
import "./ScoreCard.css";

function ScoreCard({ ascentScore }) {
  return (
    <div className="scorecard">
      <div className="scorecard-ring">
        <ProgressRing score={ascentScore} />
      </div>
      <p className="scorecard-text">Keep climbing. You're doing great.</p>
    </div>
  );
}

export default ScoreCard;

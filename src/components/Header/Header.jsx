import { formatDate } from "../../utils/date";
import "./Header.css";

function Header({ title, dateType, subtitle }) {
  // Only format the date if dateType is provided
  const date = dateType ? formatDate(new Date(), dateType) : null;

  return (
    <header className="header">
      <h2 className="header__title">{title}</h2>
      {subtitle && <p className="header__subtitle">{subtitle}</p>}
      {date && <p className="header__date">{date}</p>}
    </header>
  );
}

export default Header;

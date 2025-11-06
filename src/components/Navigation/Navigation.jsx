import { useNavigate, useLocation } from "react-router-dom";

import ascentLogo from "../../assets/images/ascent-logo.svg";
import chevronLogo from "../../assets/images/chevron-logo.svg";
import homeGray from "../../assets/images/home-gray.svg";
import homeCyan from "../../assets/images/home-cyan.svg";
import targetGray from "../../assets/images/target-gray.svg";
import targetCyan from "../../assets/images/target-cyan.svg";
import journalGray from "../../assets/images/journal-gray.svg";
import journalCyan from "../../assets/images/journal-cyan.svg";
import chartGray from "../../assets/images/chart-gray.svg";
import chartCyan from "../../assets/images/chart-cyan.svg";
import accountIcon from "../../assets/images/account-icon.svg";
import "./Navigation.css";

function Navigation({ toggleCollapse, isCollapsed }) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "home", path: "/", gray: homeGray, cyan: homeCyan, label: "Home" },
    {
      id: "goals",
      path: "/goals",
      gray: targetGray,
      cyan: targetCyan,
      label: "Goals",
    },
    {
      id: "journal",
      path: "/journal",
      gray: journalGray,
      cyan: journalCyan,
      label: "Journal",
    },
    {
      id: "insights",
      path: "/insights",
      gray: chartGray,
      cyan: chartCyan,
      label: "Insights",
    },
  ];

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <nav className={`navigation ${isCollapsed ? "collapsed" : ""}`}>
      <div className="navigation__logo" onClick={toggleCollapse}>
        <img
          src={ascentLogo}
          alt="Ascent Logo"
          className="navigation__logo-image"
        />
        <h3 className="navigation__logo-text">Ascent</h3>
        <img className="navigation__logo-chevron" src={chevronLogo} alt="<" />
      </div>

      <ul className="navigation__list">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li
              key={item.id}
              className={`navigation__item ${
                isActive ? "navigation__item--active" : ""
              }`}
              onClick={() => handleNavClick(item.path)}
            >
              <img
                src={isActive ? item.cyan : item.gray}
                alt={item.label}
                className="navigation__icon"
              />
              <span className="navigation__label">{item.label}</span>
            </li>
          );
        })}
      </ul>
      <div className="navigation__account">
        <button className="navigation__account-button">
          <img
            src={accountIcon}
            alt="Account"
            className="navigation__account-icon"
          />
        </button>
        <p className="navigation__account-text">Account</p>
      </div>
    </nav>
  );
}

export default Navigation;

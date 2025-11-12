import { useNavigate, useLocation } from "react-router-dom";
import navItems from "../../utils/navItems";
import ascentLogo from "../../assets/images/ascent-logo.svg";
import chevronLogo from "../../assets/images/chevron-logo-left.svg";
import accountIcon from "../../assets/images/account-gray.svg";
import "./Navigation.css";

function Navigation({ isCollapsed, toggleCollapse, openModal }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className={`navigation ${isCollapsed ? "collapsed" : ""}`}>
      <div className="navigation__logo" onClick={toggleCollapse}>
        <img
          src={ascentLogo}
          alt="Ascent Logo"
          className="navigation__logo-image"
        />
        <h3 className="navigation__logo-text">Ascent</h3>
        <img
          src={chevronLogo}
          alt="Collapse"
          className="navigation__logo-chevron"
        />
      </div>

      <nav aria-label="Main Navigation">
        <ul className="navigation__list">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={item.id}
                className={`navigation__item ${
                  isActive ? "navigation__item--active" : ""
                }`}
                onClick={() => navigate(item.path)}
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
      </nav>

      <div className="navigation__account" onClick={() => openModal("account")}>
        <button className="navigation__account-button">
          <img
            src={accountIcon}
            alt="Account"
            className="navigation__account-icon"
          />
        </button>
        <p className="navigation__account-text">Account</p>
      </div>
    </aside>
  );
}

export default Navigation;

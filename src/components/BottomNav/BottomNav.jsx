import { useNavigate, useLocation } from "react-router-dom";
import navItems from "../../utils/navItems";
import "./BottomNav.css";

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      <ul className="bottom-nav__list">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.id} className="bottom-nav__item">
              <button
                className={`bottom-nav__button ${
                  isActive ? "bottom-nav__button--active" : ""
                }`}
                onClick={() => navigate(item.path)}
              >
                <div
                  className={`bottom-nav__icon-wrapper ${
                    isActive ? "bottom-nav__icon-wrapper--active" : ""
                  }`}
                >
                  <img
                    src={isActive ? item.cyan : item.gray}
                    alt={item.label}
                    className="bottom-nav__icon"
                  />
                </div>
                <span className="bottom-nav__label">{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default BottomNav;

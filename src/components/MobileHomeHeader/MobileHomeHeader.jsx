import ascentLogo from "../../assets/images/ascent-logo.svg";
import "./MobileHomeHeader.css";

function MobileHomeHeader({ openModal }) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mobile-home-header">
      <div className="mobile-home-header__left">
        <h1 className="mobile-home-header__title">
          <img
            src={ascentLogo}
            alt="Ascent Logo"
            className="mobile-home-header__icon"
          />
          Ascent
        </h1>
        <p className="mobile-home-header__date">{currentDate}</p>
      </div>

      <button
        className="mobile-home-header__account-btn"
        onClick={() => openModal("account")}
      >
        A
      </button>
    </div>
  );
}

export default MobileHomeHeader;

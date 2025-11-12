import Modal from "../Modal/Modal";
import userIcon from "../../assets/images/account-cyan.svg";
import bellIcon from "../../assets/images/bell-icon.svg";
import mailIcon from "../../assets/images/mail-icon.svg";
import paletteIcon from "../../assets/images/palette-icon.svg";
import settingsCyan from "../../assets/images/settings-cyan.svg";
import settingsGray from "../../assets/images/settings-gray.svg";
import logoutIcon from "../../assets/images/logout-icon.svg";
import "./AccountModal.css";

function AccountModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} icon={userIcon} title="Account">
      <div className="account">
        <div className="account__profile">
          <div className="account__avatar">A</div>
          <div>
            <p className="account__name">Alex Johnson</p>
            <p className="account__email">alex.johnson@email.com</p>
          </div>
        </div>

        <div className="account__section">
          <h3 className="account__section-title">
            <img src={settingsCyan} alt="Settings" /> Preferences
          </h3>

          <div className="account__option">
            <div className="account__option-info">
              <img src={bellIcon} alt="Bell" />
              <div className="account__option-text">
                <p className="account__option-text-title">Daily Reminders</p>
                <span className="account__option-text-subtitle">
                  Get notified about your habits
                </span>
              </div>
            </div>
            <input
              className="account__option-slider"
              type="checkbox"
              defaultChecked
            />
          </div>

          <div className="account__option">
            <div className="account__option-info">
              <img src={mailIcon} alt="Mail" />
              <div className="account__option-text">
                <p className="account__option-text-title">Email Updates</p>
                <span className="account__option-text-subtitle">
                  Weekly progress reports
                </span>
              </div>
            </div>
            <input className="account__option-slider" type="checkbox" />
          </div>

          <div className="account__option">
            <div className="account__option-info">
              <img src={paletteIcon} alt="Palette" />
              <div className="account__option-text">
                <p className="account__option-text-title">Dark Mode</p>
                <span className="account__option-text-subtitle">
                  Always use dark theme
                </span>
              </div>
            </div>
            <input
              className="account__option-slider"
              type="checkbox"
              defaultChecked
            />
          </div>
        </div>

        <div className="account__stats">
          <h3 className="account__stats-title">Your Journey</h3>
          <div className="account__stats-grid">
            <div className="account__stat">
              <p className="account__stat-value">156</p>
              <p className="account__stat-label">Total Days</p>
            </div>
            <div className="account__stat">
              <p className="account__stat-value">12</p>
              <p className="account__stat-label">Streak</p>
            </div>
            <div className="account__stat">
              <p className="account__stat-value">78%</p>
              <p className="account__stat-label">Avg Score</p>
            </div>
          </div>
        </div>

        <div className="account__actions">
          <button className="account__button account__button--manage">
            <img
              src={settingsGray}
              alt="Manage"
              className="account__button-icon"
            />{" "}
            Manage Subscription
          </button>
          <button className="account__button account__button--logout">
            <img
              src={logoutIcon}
              alt="Logout"
              className="account__button-icon"
            />{" "}
            Sign Out
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default AccountModal;

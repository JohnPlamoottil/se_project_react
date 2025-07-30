import "./Header.css";
import logo from "../../assets/Logo.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ handleAddClick, weatherData, userData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="WTWR logo" className="header__logo" />
      </Link>
      {/* <img className="header__logo" src={logo} alt="header logo" /> */}
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header-container-content">
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add Clothes
        </button>
        {userData && (
          <Link to="/profile">
            <div className="header__user-container">
              <p className="header__username">{userData.name}</p>
              <img
                src={userData.avatar}
                alt="user-avatar"
                className="header__avatar"
              />
            </div>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;

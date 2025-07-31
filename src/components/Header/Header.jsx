import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Logo.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  onLoginClick,
  onRegisterClick,
  onLogoutClick,
}) {
  const currentUser = useContext(CurrentUserContext);

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
        {currentUser ? (
          <>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-btn"
            >
              + Add Clothes
            </button>

            <Link to="/profile">
              <div className="header__user-container">
                <p className="header__username">{currentUser.name}</p>
                {currentUser.avatar ? (
                  <img
                    src={currentUser.avatar}
                    alt="user-avatar"
                    className="header__avatar"
                  />
                ) : (
                  <div className="header__avatar header__avatar_placeholder">
                    {currentUser.name[0].toUpperCase()}
                  </div>
                )}
              </div>
            </Link>
            <button className="header__button" onClick={onLogoutClick}>
              Log Out
            </button>
          </>
        ) : (
          <>
            <button className="header__button" onClick={onLoginClick}>
              Log In
            </button>
            <button className="header__button" onClick={onRegisterClick}>
              Sign Up
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

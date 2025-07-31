import { useContext } from "react";
import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ showEditModal, onLogout }) {
  const currentUser = useContext(CurrentUserContext);

  if (!currentUser) {
    return null;
  }

  return (
    <div className="sidebar">
      <div className="sidebar__user">
        <img
          className="sidebar__avatar"
          src={currentUser.avatar}
          alt="Default avatar"
        />
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <button className="sidebar__button" onClick={showEditModal}>
        Change Profile Data
      </button>
      <button className="sidebar__button" onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
}

export default SideBar;

import { useContext } from "react";
import avatar from "../../assets/Avatar.png";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Default avatar" />
      <p className="sidebar__username"> JJ Plamoottil</p>
    </div>
  );
}

export default SideBar;

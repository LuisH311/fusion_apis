import React from "react";
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import "../styles/sidebarButton.css";

export default function SidebarButton(props) {
  const location = useLocation();

  const isActive = location.pathname === props.to;

  const btnClass = isActive ? "btn-body active" : "btn-body";
  return (
    <Link to={props.to}>
      <div className={btnClass}>
        <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
          {props.icon}
          <b className="btn-title">{props.title}</b>
        </IconContext.Provider>
      </div>
    </Link>
  );
}

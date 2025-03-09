import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isCollapsed }) => {
  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <ul className="menu-items">
        {[
          { path: "/home", icon: "🏠", text: "Home" },
          { path: "/orders", icon: "📦", text: "Orders" },
          { path: "/analytics", icon: "📊", text: "Analytics" },
          { path: "/settings", icon: "⚙️", text: "Settings" },
        ].map(({ path, icon, text }) => (
          <li className="menu-item" key={path}>
            <Link to={path}>
              <i className="menu-icon">{icon}</i>
              {!isCollapsed && <span className="menu-text">{text}</span>}
              {isCollapsed && <span className="tooltip">{text}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setDropdownOpen(false);
    setTimeout(() => {
      navigate("/login");
    }, 0);
  };

  return (
    <header className="navbar">
      {/* ☰ Sidebar Toggle Button */}
      <div className="menu-toggle" onClick={toggleSidebar}>
        ☰
      </div>

      {/* 🔍 Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      {/* 👤 User Profile Dropdown */}
      <div className={`user-menu ${dropdownOpen ? "open" : ""}`}>
        <div className="user-info" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <span>{user?.name}</span>
          <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
        </div>

        {/* ⬇️ Dropdown Menu */}
        {dropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={() => navigate("/profile")}>Profile</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

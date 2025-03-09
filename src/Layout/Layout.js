import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`app-container ${isCollapsed ? "collapsed" : ""}`}>
            <Sidebar isCollapsed={isCollapsed} />
            <div className="main-content">
                <Navbar toggleSidebar={toggleSidebar} />
                <div className="page-content">
                    <Outlet /> {/* Page content loads dynamically */}
                </div>
            </div>
        </div>
    );
};

export default Layout;

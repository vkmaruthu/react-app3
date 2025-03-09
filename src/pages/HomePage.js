import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const HomePage = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
  
    return (
        <main className="dashboard main customer" id="main">
            <h1>Home page</h1>
            <p>This my home page.......................................</p>
        </main>
    );
};

export default HomePage;

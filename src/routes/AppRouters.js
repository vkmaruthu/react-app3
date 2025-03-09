import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import PrivateRoute from "../components/PrivateRoute";
import HomePage from "../pages/HomePage";
import Orders from "../pages/Orders";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import { useSelector } from "react-redux";

const AppRouters = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      {/* Redirect to login if not authenticated */}
      <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />

      {/* Wrap all pages inside Layout */}
      <Route path="/" element={isAuthenticated ? <Layout /> : <Navigate to="/login" replace />}>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
      </Route>

      {/* Handle unknown routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouters;

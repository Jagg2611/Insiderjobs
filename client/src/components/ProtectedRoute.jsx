// components/ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Loading from "./Loading";

const ProtectedRoute = ({ allowedRoles, allowPublic = false, children }) => {
  const { role } = useContext(AppContext);

  // Still loading user data
  if (role === null && !allowPublic) return <Loading />;

  // If public is allowed and user is unauthenticated
  if (allowPublic && role === null) return children;

  // If user has a role but not allowed to access this route
  if (role && !allowedRoles.includes(role)) {
    // If recruiter tries to access student pages
    if (role === "recruiter") {
      return <Navigate to="/dashboard" />;
    }
    // If student tries to access recruiter pages
    if (role === "student") {
      return <Navigate to="/" />;
    }
    // For any other roles, redirect to root as fallback
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;

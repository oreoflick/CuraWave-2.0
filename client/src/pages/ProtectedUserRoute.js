import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../api";
import { CircularProgress } from "@mui/material";

const ProtectedUserRoute = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const { loggedIn, setLoggedIn, setUser } = useAuth();

  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        if (!user) {
          setLoggedIn(false);
          setUser(null);
        } else {
          setLoggedIn(true);
          setUser(user);
        }
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setLoggedIn(false);
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, [setUser, setLoggedIn]);

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </div>
    );
  }

  return loggedIn ? children : <Navigate to="/signIn" />;
};

export default ProtectedUserRoute;
